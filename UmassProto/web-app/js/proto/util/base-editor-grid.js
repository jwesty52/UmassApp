/**
 * A grid for viewing and editing records backed by a RESTful store.
 */
//Ext.Loader.setConfig({enabled: true});

Ext.require([
    'Ext.grid.*',
    'Ext.data.*'
]);

Ext.define('Casa.util.BaseEditorGrid', {

    extend: 'Ext.grid.Panel',

    initComponent: function() {
        this._rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {pluginId: 'rowEditing'});


        Ext.apply(this, {
            store: this.createStore(),
            columns: this.createCols(),
            selType:'rowmodel',
            forceFit: true,
            dockedItems: [this.createToolbar()],
            plugins: [this._rowEditing],
            listeners: {activate:this.load, selectionchange:this.onSelectionChange, scope:this}
        });

        this.callParent(arguments)
    },

    load: function() {
        this.getStore().load();
    },


    //------------------------//
    //       Abstract         //
    //------------------------//
    modelClass: '',  // The model class name - ensure this has been defined (e.g. in app.js).
    url: '',         // URL for the RESTful endpoint (rest/ will be prepended)
    sorters: [],     // Desired grid sort.

    createCols: function() {
        // Return an array of grid column definitions.
    },


    //------------------------//
    //    Implementation      //
    //------------------------//
    createStore: function() {
        return Ext.create('c.restfulstore', {
            model: this.modelClass,
            url: this.url,
            sorters: this.sorters
        });
    },

    createToolbar: function() {
        return Ext.create('Ext.toolbar.Toolbar', {
            dock: 'top',
            items: [
                {
                    text:'Add',
                    iconCls: 'icon-add',
                    handler: this.addRecord,
                    scope: this
                },{
                    text:'Reload',
                    iconCls: 'icon-refresh',
                    handler: this.loadGridStore,
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

    loadGridStore: function() {
        this.getStore().load();
    },

    addRecord: function() {
        var rec = Ext.ModelManager.create({}, this.modelClass);
        this._rowEditing.cancelEdit();
        this.store.insert(0, rec);
        this._rowEditing.startEdit(0, 0);
    },

    deleteRecord: function() {
        var recs = this.getSelectionModel().getSelection();
        if (recs.length == 0) return;
        
        var store = this.store;
        Ext.Msg.show({
            title: 'Delete',
            msg: 'Are you sure?',
            buttons: Ext.Msg.YESNO,
            fn: function(buttonId) {
                if (buttonId == 'yes') store.remove(recs);
            }
        });
    },

    onSelectionChange: function(grid, selections) {
        var tbar = this.child('toolbar');
        var deleteButton = tbar.child('button[text="Delete"]');
        deleteButton.setDisabled(selections.length == 0);
    }


});