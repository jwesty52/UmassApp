Ext.define('Casa.project.ProjectBase', {
    extend: 'Ext.form.Panel',
    alias: 'c.projbase',


    initComponent: function() {
        this.createWindowLayout();
        ProjectBase = this;
        Ext.apply(this, {

             title: 'Projects',
            id: 'projectbase',
            width: 3000,
            height: 50000,
            layout: 'border',
//                        padding: '5 5 0 5',
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



         this._selector = Ext.create('c.projselector', {
            region: 'west',
              listeners: {selectionchange:this.onProjectSelect, scope: this} ,
            flex: 1.4
        });

        this._panel = Ext.create('c.projectpanel', {
            flex: 6,
            region: 'center'
        });
    },

    onProjectSelect: function(grid, recs) {
        if(recs.length > 0) {
            this._panel.saveProject();
            this._panel.loadProject(recs[0]);
        }
    }

});