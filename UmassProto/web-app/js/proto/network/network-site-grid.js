Ext.define('Casa.network.NetworkSiteGrid', {

    extend: 'Ext.grid.Panel',
    alias: 'c.netsitesgrid',

    initComponent: function() {
//        this._rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {});
        Ext.apply(this, {
            height: 350,
            width: 600,
            title: 'Sites',
//            padding: '0 0 0 105',
//            dockedItems: [this.createToolbar()],
            columns: this.createCols(),
            store: this.createStore(),
            listeners:  {itemdblclick: this.switchToSite   }
        });

        this.callParent(arguments)
    },

    createToolbar: function(){
        return Ext.create('Ext.toolbar.Toolbar', {
            dock: 'top',
            items: [
                {
                    text:'Add',
                    iconCls: 'icon-add',
                    handler: this.addRecord,
                    scope: this
                },{
                    text:'Delete',
                    iconCls: 'icon-delete',
                    disabled: true,
                    handler: this.deleteRecord,
                    scope: this
                }
            ]
        });

    },

    loadNetwork: function(network) {
        console.log('in here')
        this._networkId = network.get('id');
        this.loadGridStore();
    },

    createCols: function() {
        return [
            {header: 'Name', dataIndex: 'name', editor: {xtype: 'textfield'}, flex:.5},
            {header:'Description', dataIndex:'description', editor:{xtype:'textfield'}, flex:1}
        ];
    },

    createStore: function() {
        this._store = Ext.create('c.jsonstore', {
            model: 'Casa.Site',
            url: 'site/listByNetwork'
        });
        return this._store
    },

    loadGridStore: function() {
        this.getStore().load({params:{
            network: this._networkId
        }});
    },

    addRecord: function() {
        var rec = Ext.ModelManager.create({network:this._networkId}, this.modelClass);
        this._rowEditing.cancelEdit();
        this.store.insert(0, rec);
        this._rowEditing.startEdit(0, 0);
    },

    onLoadGridStore: function(estimate){},

    switchToSite: function(grid, rec) {

//        console.log(rec)

        CasaApp.changePanel(CasaApp._siteBase, 6, true)
//        console.log(NetworkSelector.getStore().findRecord('id', rec.get('id')))
        SiteSelector.getSelectionModel().select(SiteSelector.getStore().findRecord('id', rec.get('id')))

    }


});