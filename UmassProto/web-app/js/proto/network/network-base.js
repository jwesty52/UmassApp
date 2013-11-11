Ext.define('Casa.network.Network', {
    extend: 'Ext.form.Panel',
    alias: 'c.networkbase',


    initComponent: function() {

        NetworkBase = this;
        this.createLayout();
        Ext.apply(this, {

            title: 'Networks',
            id: 'networkbase',
            width: 3000,
            height: 50000,
            layout: 'border',
//            padding: '5 5 0 5' ,
//            defaults: {padding: 4, border:0},

            items: [this._nSelector, this._nPanel]


        });

        this.callParent(arguments)
    },

     buttonSelect: function() {},

    createLayout: function() {



        this._nSelector = Ext.create('c.networkselector', {
            region: 'west',
            listeners: {selectionchange:this.onNetworkSelect, scope: this} ,
            flex: 1.4
        });

        this._nPanel = Ext.create('c.networkpanel', {
            flex: 6,
            region: 'center'
        });
    },

    onNetworkSelect: function(grid, recs) {
        console.log(recs)
        if(recs.length > 0) {
//            this._nPanel.saveNetwork();
            this._nPanel.loadNetwork(recs[0]);

        }
    }

});