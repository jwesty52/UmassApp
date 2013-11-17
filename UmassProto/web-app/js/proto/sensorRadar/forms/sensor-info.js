/**
 * Essential Estimate information.
 */
Ext.define('Casa.sensor.SensorInfo', {

    extend: 'Ext.form.Panel',
    alias: 'c.sensorinfo',

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
                fieldLabel: 'Instrument ID',
                name: 'instrumentId'
            },
            this._contactCombo,
            this._organizationCombo,

            {
                xtype:'numberfield',
                fieldLabel: 'Height MSL',
                name: 'heightMSL'
            },
            {
                xtype:'numberfield',
                fieldLabel: 'Height Above Ground',
                name: 'heightAboveGround'
            },

            {
                xtype:'numberfield',
                fieldLabel: 'Like Sensors In Network',
                name: 'likeSensorsInNetwork'
            },
            {
                xtype:'datefield',
                fieldLabel: 'Installation Date',
                name: 'installationDate'
            },
            {
                xtype:'datefield',
                fieldLabel: 'Decommission Date',
                name: 'decommissionDate'
            },
            {
                xtype:'datefield',
                fieldLabel: 'Start Date',
                name: 'Start Date'
            },
            {
                xtype:'datefield',
                fieldLabel: 'End Date',
                name: 'endDate'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Data Tranmission Frequency',
                name: 'dataTransmissionFrequency'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Output Variable',
                name: 'outputVariable'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Variable Unit',
                name: 'variableUnit'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Data Accessibility',
                name: 'dataAccessibility'
            },
             {
                xtype:'textfield',
                fieldLabel: 'BUTTONS HERE',
                name: 'name'
            },
             {
                xtype:'textfield',
                fieldLabel: 'BUTTONS HERE TOO',
                name: 'name'
            }
        ]
    }

});