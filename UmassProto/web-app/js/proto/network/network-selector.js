
Ext.define('Casa.network.NetworkSelector', {

    extend: 'Ext.grid.Panel',
    alias: 'c.networkselector',

    initComponent: function() {

        NetworkSelector = this;
        Ext.apply(this, {
            border: 0,
            title: 'Networks',
            iconCls: 'icon-search',
            forceFit: true,
            collapsible: true,
            floatable: false,
            store: this.createStore(),
            hideHeaders: true,
            columns: [
                {header:'Contact', dataIndex:'contact'},
                {header:'Network', dataIndex:'name'}
            ],
            features: [{
                ftype:'grouping',
                groupHeaderTpl: '{name} ({rows.length})',
                hideGroupedHeader: true
            }],
            dockedItems: [this.createToolbar()]
        });

        this.callParent(arguments)
    },


    //------------------------//
    //    Implementation      //
    //------------------------//
    createStore: function() {
        return Ext.create('store.json', {
            model: 'Casa.NetworkStub',
            proxy: {
                type: 'ajax',
                url: 'network/list'
            },
            autoLoad: true
        });
    },

    createToolbar: function() {
        this._addAction = Ext.create('Ext.Action', {
            text: 'New Network',
            iconCls: 'icon-add-employee',
            handler: this.createNetwork,
            scope: this
        });

        return Ext.create('widget.toolbar', {
            dock: 'bottom',
            items: [
                {
                    text: 'Refresh',
                    iconCls: 'icon-refresh',
                    handler: function() {this.getStore().load();},
                    scope: this
                }, this._addAction
            ]
        });
    } ,

    createNetwork: function() {
         var store = Ext.create('store.json', {
            model: 'Casa.Employee',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'lookup/employee'
            }
        });


        var form = Ext.create('Ext.form.Panel', {



            frame: true,
            url: 'rest/network/create',
            fieldDefaults: {labelWidth: 80, width: 260},
            items: [
                {xtype: 'textfield', name:'name', fieldLabel: 'Name', allowBlank: false}
            ],
            buttons: [
                {
                    text: 'Submit',
                    handler: function() {

                            form.submit();

                }
                },{
                 text: 'Cancel',
                            handler: function() {
                                this._window.close();
                            }, scope:this
                }

               ]
//            listeners:{actioncomplete:this.onNetworkCreated, scope:this}
        });

        this._window = Ext.create('Ext.window.Window', {
            title: 'Add new Network',
            iconCls: 'icon-add',
            layout: 'fit',
            modal: true,
            height: 235,
            width: 300,
            items: form
        });

        this._window.show();
        form.items.first().focus();
    }
            
});