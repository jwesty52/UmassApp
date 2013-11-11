
Ext.define('Casa.project.ProjectSelector', {

    extend: 'Ext.grid.Panel',
    alias: 'c.projselector',

    initComponent: function() {

        ProjectSelector = this;
        Ext.apply(this, {
            border: 0,
            title: 'Projects',
            iconCls: 'icon-search',
            forceFit: true,
            collapsible: true,
            floatable: false,
            store: this.createStore(),
            hideHeaders: true,
            columns: [
                {header:'Contact', dataIndex:'contact'},
                {header:'Project', dataIndex:'name'}
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
            model: 'Casa.ProjectStub',
            proxy: {
                type: 'ajax',
                url: 'project/list'
            },
            autoLoad: true
        });
    },

    createToolbar: function() {
        this._addAction = Ext.create('Ext.Action', {
            text: 'New Project',
            iconCls: 'icon-add-employee',
            handler: this.createProject,
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

    createProject: function() {
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
            url: 'rest/project/create',
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
//            listeners:{actioncomplete:this.onProjectCreated, scope:this}
        });

        this._window = Ext.create('Ext.window.Window', {
            title: 'Add new Project',
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