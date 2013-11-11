
Ext.define('Casa.site.SiteSelector', {

    extend: 'Ext.grid.Panel',
    alias: 'c.siteselector',

    initComponent: function() {

        SiteSelector = this;
        Ext.apply(this, {
            border: 0,
            title: 'Sites',
            iconCls: 'icon-search',
            forceFit: true,
            collapsible: true,
            floatable: false,
            store: this.createStore(),
            hideHeaders: true,
            columns: [
                {header:'Contact', dataIndex:'contact'},
                {header:'Site', dataIndex:'name'}
            ],
            features: [{
                ftype:'grouping',
                groupHeaderTpl: '{name} ({rows.length})',
                hideGroupedHeader: true
            }],
            dockedItems: [this.createToolbar()]
        });


        console.log(this.getStore( ))
        this.callParent(arguments)
    },


    //------------------------//
    //    Implementation      //
    //------------------------//
    createStore: function() {
        return Ext.create('store.json', {
            model: 'Casa.SiteStub',
            proxy: {
                type: 'ajax',
                url: 'site/list'
            },
            autoLoad: true
        });
    },

    createToolbar: function() {
        this._addAction = Ext.create('Ext.Action', {
            text: 'New Site',
            iconCls: 'icon-add-employee',
            handler: this.createSite,
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

    createSite: function() {
//        var store = Ext.create('store.json', {
//            model: 'Casa.Site',
//            autoLoad: true,
//            proxy: {
//                type: 'ajax',
//                url: 'lookup/employee'
//            }
//        });
//
//
//        var form = Ext.create('Ext.form.Panel', {
//
//
//
//            frame: true,
//            url: 'rest/site/create',
//            fieldDefaults: {labelWidth: 80, width: 260},
//            items: [
//                {xtype: 'textfield', name:'name', fieldLabel: 'Name', allowBlank: false}
//            ],
//            buttons: [
//                {
//                    text: 'Submit',
//                    handler: function() {
//
//                        form.submit();
//
//                    }
//                },{
//                    text: 'Cancel',
//                    handler: function() {
//                        this._window.close();
//                    }, scope:this
//                }
//
//            ]
////            listeners:{actioncomplete:this.onSiteCreated, scope:this}
//        });
//
//        this._window = Ext.create('Ext.window.Window', {
//            title: 'Add new Site',
//            iconCls: 'icon-add',
//            layout: 'fit',
//            modal: true,
//            height: 235,
//            width: 300,
//            items: form
//        });
//
//        this._window.show();
//        form.items.first().focus();
    }

});