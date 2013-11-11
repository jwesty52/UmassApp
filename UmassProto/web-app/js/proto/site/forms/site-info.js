/**
 * Essential Estimate information.
 */
Ext.define('Casa.site.SiteInfo', {

    extend: 'Ext.form.Panel',
    alias: 'c.siteinfo',

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
                fieldLabel: 'Site ID',
                name: 'siteId'
            },

            {
                xtype:'textfield',
                fieldLabel: 'Status',
                name: 'status'
            },
            this._contactCombo,
            this._organizationCombo,
            {
                xtype:'textfield',
                fieldLabel: 'Alias',
                name: 'alias'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Type',
                name: 'type'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Address',
                name: 'address'
            },
            {
                xtype:'textfield',
                fieldLabel: 'County',
                name: 'county'
            },
            {
                xtype:'textfield',
                fieldLabel: 'State',
                name: 'state'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Directions',
                name: 'directions'
            },
            {
                xtype:'numberfield',
                fieldLabel: 'Latitude',
                name: 'latitude'
            },
             {
                xtype:'numberfield',
                fieldLabel: 'Longitude',
                name: 'longitude'
            },
             {
                xtype:'numberfield',
                fieldLabel: 'Elevation',
                name: 'elevation'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Access Limitations',
                name: 'accessLimitations'
            }

        ]
    }

});