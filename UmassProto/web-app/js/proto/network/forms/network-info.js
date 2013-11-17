/**
 * Essential Estimate information.
 */
Ext.define('Casa.network.NetworkInfo', {

    extend: 'Ext.form.Panel',
    alias: 'c.networkinfo',

    initComponent: function() {
        Ext.apply(this, {
            title: 'General Information',
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


        return [
            {
                xtype:'textfield',
                fieldLabel: 'Name',
                name: 'name'
            },
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
                fieldLabel: 'Description',
                name: 'description'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Partners',
                name: 'partners'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Variables',
                name: 'variables'
            },
            {
                xtype:'textfield',
                fieldLabel: 'History',
                name: 'history'
            },
            this._contactCombo,
            this._organizationCombo

        ]
    }

});