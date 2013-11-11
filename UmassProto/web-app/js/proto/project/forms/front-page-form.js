/**
 * Essential Estimate information.
 */
Ext.define('Casa.project.FrontPageForm', {

    extend: 'Ext.form.Panel',
    alias: 'c.projfrontpage',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Front Page',
            frame: true,
//            iconCls:'icon-estimate',
            items: this.createFields()
        });

        this.callParent(arguments)
    },


    //------------------------//
    //    Implementation      //
    //------------------------//
    createFields: function() {
        this._contactStore = Ext.create('c.jsonstore', {
            model: 'Casa.Employee',
            url: 'employee/list',
            autoLoad: false
        });

        this._contactCombo = Ext.create('Ext.form.field.ComboBox', {
            xtype: 'combobox',
            fieldLabel: 'Contact',
            name: 'contact',
            store: this._contactStore,
            queryMode: 'local',
            displayField: 'fullName',
            valueField: 'id'
        });

          this._organizationStore = Ext.create('c.jsonstore', {
            model: 'Casa.Organization',
            url: 'organization/list',
            autoLoad: false
        });

        this._organizationCombo = Ext.create('Ext.form.field.ComboBox', {
            xtype: 'combobox',
            fieldLabel: 'Organization',
            name: 'organization',
            store: this._organizationStore,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id'
        });

        this._description = Ext.create('Ext.form.field.TextArea', {
            fieldLabel: 'Description',
            name: 'description',
            width: 400
        });

//        this._networkGrid = Ext.create('c.projnetgrid')


        return [   {
                xtype:'textfield',
                fieldLabel: 'Name',
                name: 'name'
            },
            this._description,
            {
                xtype:'textfield',
                fieldLabel: 'Website',
                name: 'website'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Type',
                name: 'type'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Partners',
                name: 'partners'
            },

             {
                xtype:'textfield',
                fieldLabel: 'History',
                name: 'history'
            },
            {
                xtype:'datefield',
                fieldLabel: 'Update Date',
                name: 'updateDate'
            },
            this._contactCombo,
            this._organizationCombo


        ]
    }

});