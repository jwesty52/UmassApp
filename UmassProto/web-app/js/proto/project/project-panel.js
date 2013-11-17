/**
 * The primary container for viewing and editing Estimates.
 */
Ext.define('Casa.project.ProjectPanel', {

    extend: 'Ext.tab.Panel',
    alias: 'c.projectpanel',

    initComponent: function() {

        Ext.apply(this, {
            title: '&nbsp;',
            activeItem: 0,
            border: false,
            tabBar: {defaults:{height:24}},  // new default tab height seems to clip 16px icons...
//            defaults: {frame:true, bodyPadding:4},
            items: [
                Ext.create('c.projfrontpage'),
                Ext.create('c.projoperationsform'),
                Ext.create('c.projtestbedform'),
                Ext.create('c.projnetform')
//
            ],
            dockedItems: this.createToolbar()
        });

        this.callParent(arguments)
    },

    loadProject: function(stubRec) {
        console.log(stubRec)
        this.setTitle('Project: ' + stubRec.get('name'));
        Ext.Ajax.request({
            url: 'project/get/' + stubRec.get('id'),
            success: this.onLoadSuccess,
            failure: this.onLoadFailure,
            scope: this
        });
    },

    saveProject: function() {
        if(this._project){
            var activeForm = this.getActiveTab().getForm();
            activeForm.updateRecord(this._project);
            this._project.save({
                success: this.onProjectUpdated,
                failure: this.projectUpdateFail,
                scope: this
            });
        }
    },


    //------------------------//
    //    Implementation      //
    //------------------------//
    createToolbar: function() {
        this._saveAction = Ext.create('Ext.Action', {
            text: 'Save',
            iconCls: 'icon-save',
            disabled: true
        });

        this._deleteAction = Ext.create('Ext.Action', {
            text: 'Delete',
            iconCls: 'icon-delete',
            disabled: true
        });

        return Ext.create('Ext.toolbar.Toolbar', {
            dock: 'bottom',
            defaults: {scope:this},
            items: ['->', '-', this._saveAction, this._deleteAction]
        })
    },

    onLoadSuccess: function(response) {
        var rawProject = Ext.decode(response.responseText);
        this._project = Ext.ModelManager.create(rawProject, 'Casa.Project');
        console.log(this._project);
        var allForms =this.query('form');
        Ext.Array.each(allForms, function(form){
                form.loadRecord(this._project)
            },
            this);
        var componentGrids = this.query('gridpanel');
        Ext.Array.each(componentGrids, function(grid){
            grid.loadProject(this._project)
        },
        this);
        //this.query('form').loadRecord(this._estimate);

        this.enableActions();
    },

    enableActions: function() {
        this._saveAction.enable();
        this._deleteAction.enable();
    },

    onProjectUpdated: function() {
        this.getActiveTab().loadProject(this._project);
        ProjectBase.onProjectUpdated(this._project);
        this.enableActions();
    },


    //TODO Give a good failure message
    projectUpdateFail: function() {
        Ext.MessageBox.alert('ERROR', 'Save Project Failed. ');
    },

    onLoadFailure: function(response) {
        Ext.Msg.alert('Error', 'Unable to load Project.')
    }

});
