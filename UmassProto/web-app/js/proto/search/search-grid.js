Ext.define('Casa.search.SearchGrid', {

    extend: 'Ext.grid.Panel',
    alias: 'c.searchgrid',

    modelClass: 'Casa.RadarData',
    url: 'radarDate/search',

    initComponent: function() {
        this._searchLength = 1;
        this._pageSize = 100;
        CasaApp._SearchGrid = this;
        Ext.apply(this, {
            store: this.createGridStore(),
            columns: this.createCols(),
            region: 'center' ,
            autoScroll: true,
            width: 150,
            flex: 6,
            height: 600 ,


            listeners: { selectionchange:this.onSelectionChange, scope:this},


            dockedItems: [{
                xtype: 'pagingtoolbar',
                store: this._store,   // same store GridPanel is using
                dock: 'top',
                id: 'pagingToolbar',
                displayInfo: true,
                listeners: {beforechange: this.beforePageChange, scope: this}
            }]
        });



        this.callParent(arguments)

    },

    beforePageChange: function(bar, page) {

        this.getStore().load({params: {s1: this._s1, s2: this._s2, s3: this._s3, s4: this._s4, s5: this._s5, start:((page-1)*this._pageSize), limit:this._pageSize } })
//        return false
    },

    //Params aren't working correctly
    loadGridStore: function(s1, s2, s3, s4, s5, op) {

        this._s1 = s1;
        this._s2 = s2;
        this._s3 = s3;
        this._s4 = s4;
        this._s5 = s5;
        this.getDockedComponent('pagingToolbar').moveFirst()



        this.getStore().load({params: {s1: s1, s2: s2, s3: s3, s4: s4, s5: s5, start:0, limit:this._pageSize } });


        console.log(this.getStore())
    },

    createGridStore: function() {
        this._store = Ext.create('c.jsonstore', {
            model: 'Casa.RadarData',
            pageSize: this._pageSize,
            url: 'radarData/read',
//
            paramNames: {start:'offset',limit:'max',sort:'sort',dir:'order'},
            baseParams: {offset:0,max:this.pageSize},
            autoLoad: false
//            listeners: {load: BDManagerApp._tradeSearchPanel.onSearch, scope: BDManagerApp._tradeSearchPanel}
        });
        return this._store
    },



    createCols: function() {


        return [
            {header: 'Sensor', dataIndex: 'sensor', flex: 1},
            {header: 'Url', dataIndex: 'url',  flex: 1},
            {header: 'Type', dataIndex: 'type',flex: 1},
            {header: 'Date', dataIndex: 'date', xtype: 'datecolumn', format: 'm/d/y', flex: 1}

        ];
    },

    onSelectionChange: function(grid, selections) {
//        var tbar = this.child('toolbar');
//        var deleteButton = tbar.child('button[text="Delete"]');
//        deleteButton.setDisabled(selections.length == 0);
    }



});