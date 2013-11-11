Ext.define('Casa.project.ProjectNetworkGrid', {

    extend: 'Ext.grid.Panel',
    alias: 'c.projnetgrid',

    initComponent: function() {
//        this._rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {});
        Ext.apply(this, {
            height: 350,
            width: 600,
            title: 'Networks',
//            padding: '0 0 0 105',
//            dockedItems: [this.createToolbar()],
            columns: this.createCols(),
            store: this.createStore(),
            listeners:  {itemdblclick: this.switchToNetwork   }
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

    loadProject: function(project) {
        console.log('in here')
        this._projectId = project.get('id');
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
            model: 'Casa.Network',
            url: 'network/listByProject'
        });
        return this._store
    },

    loadGridStore: function() {
        this.getStore().load({params:{
            project: this._projectId
        }});
    },

    addRecord: function() {
        var rec = Ext.ModelManager.create({project:this._projectId}, this.modelClass);
        this._rowEditing.cancelEdit();
        this.store.insert(0, rec);
        this._rowEditing.startEdit(0, 0);
    },

    onLoadGridStore: function(estimate){},

    switchToNetwork: function(grid, rec) {

//        console.log(rec)

        CasaApp.changePanel(CasaApp._networkBase, 4, true)
//        console.log(NetworkSelector.getStore().findRecord('id', rec.get('id')))
        NetworkSelector.getSelectionModel().select(NetworkSelector.getStore().findRecord('id', rec.get('id')))

    }


});