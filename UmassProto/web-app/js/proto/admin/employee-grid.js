/**
 * A grid for viewing and editing employees, backed by a RESTful store.
 */
Ext.define('Prose.admin.EmployeeGrid', {

    extend: 'Ext.grid.Panel',
    alias: 'p.employeegrid',

    initComponent: function() {
        Ext.define('Prose.Employee', {
            extend: 'Ext.data.Model',
            fields: ['id', 'firstName', 'lastName', 'email', 'password',
                {name:'enabled', type:'bool'}
            ],
            validations: [
                {type:'presence', field:'firstName'},
                {type:'presence', field:'lastName'},
                {type:'presence', field:'email'}
            ]
        });

        this._cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {});

        Ext.apply(this, {
            title: 'Employees',
            iconCls: 'icon-person',
            forceFit: true,
            store: this.createStore(),
            selModel: {selType:'cellmodel'},
            columns: [
                {header:'First Name', dataIndex:'firstName', editor:{xtype:'textfield'}},
                {header:'Last Name', dataIndex:'lastName', editor:{xtype:'textfield', allowBlank:false}},
                {header:'Email', dataIndex:'email', editor:{xtype:'textfield', allowBlank:false}},
                {header:'Password', dataIndex:'password', editor:{xtype:'textfield', inputType:'password'}},
                {header:'Enabled', dataIndex:'enabled', width:35, fixed:true, editor:{xtype:'checkbox'}}
            ],
            dockedItems: [
                this.createToolbar()
            ],
            plugins: [
                this._cellEditing
            ],
            listeners: {activate:this.load, scope:this}
        });

        this.callParent(arguments)
    },

    load: function() {
        this.getStore().load();
    },
            

    //------------------------//
    //    Implementation      //
    //------------------------//
    createStore: function() {
        return Ext.create('prose.restfulstore', {
            model: 'Prose.Employee',
            url: 'employee'
        });
    },

    createToolbar: function() {
        return Ext.create('Ext.toolbar.Toolbar', {
            dock: 'top',
            items: [
                {
                    text:'Add Employee',
                    iconCls: 'icon-add',
                    handler: this.addEmployee,
                    scope: this
                },{
                    text:'Reload',
                    iconCls: 'icon-refresh',
                    handler: function() {this.getStore().load();},
                    scope: this
                }
            ]
        });
    },

    addEmployee: function() {
        var rec = new Prose.Employee({});
        
        this._cellEditing.cancelEdit();
        this.store.insert(0, rec);
        this._cellEditing.startEditByPosition({row:0, column:0});
    }

});