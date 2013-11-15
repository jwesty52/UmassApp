/**
 * Essential Estimate information.
 */
Ext.define('Casa.sensor.SensorDescription', {

    extend: 'Ext.form.Panel',
    alias: 'c.sensordescription',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Description',
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
        this._description = Ext.create('Ext.form.field.TextArea', {
            fieldLabel: 'Description',
            name: 'description',
            width: 400
        });

        this._radomeDescription = Ext.create('Ext.form.field.TextArea', {
            fieldLabel: 'Radome Description',
            name: 'radomeDescription',
            width: 400
        });

        return [
            this._description,
            {
                xtype:'textfield',
                fieldLabel: 'Manufacturer',
                name: 'manufacturer'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Make',
                name: 'make'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Model',
                name: 'model'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Approximate Dimensions',
                name: 'approximateDimensions'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Approximate Weight',
                name: 'approximateWeight'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Radar Category',
                name: 'radarCategory'
            },
            this._radomeDescription
        ]
    }

});