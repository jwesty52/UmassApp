Ext.define('Casa.site.SiteBase', {
    extend: 'Ext.form.Panel',
    alias: 'c.sitebase',


    initComponent: function() {
        SiteBase = this;
        this.createWindowLayout()
        Ext.apply(this, {

            title: 'Sites',
            id: 'sitebase',
            width: 3000,
            height: 50000,
            layout: 'border',
//            padding: '5 5 0 5' ,
//            defaults: {padding: 4, border:0},

            items: [this._selector, this._panel]


        });

        this.callParent(arguments)
    },

     buttonSelect: function() {},

    onEmployeeUpdated: function(employee) {
        this._selector.onEmployeeUpdated(employee);

    },

    onEmployeeDeleted: function() {
        this._selector.reload();
    },

    createWindowLayout: function() {



        this._selector = Ext.create('c.siteselector', {
            region: 'west',
            listeners: {selectionchange:this.onSiteSelect, scope: this} ,
            flex: 1.4
        });

        this._panel = Ext.create('c.sitepanel', {
            flex: 6,
            region: 'center'
        });
    },

    onSiteSelect: function(grid, recs) {
        if(recs.length > 0) {
            this._panel.saveSite();
            this._panel.loadSite(recs[0]);
        }
    }

});