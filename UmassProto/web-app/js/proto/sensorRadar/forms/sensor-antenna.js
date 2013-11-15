/**
 * Essential Estimate information.
 */
Ext.define('Casa.sensor.SensorAntenna', {

    extend: 'Ext.form.Panel',
    alias: 'c.sensorantenna',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Antenna',
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

        return [

            {
                xtype:'numberfield',
                fieldLabel: 'Gain',
                name: 'antennaGain'
            },
             {
                xtype:'numberfield',
                fieldLabel: 'Diameter',
                name: 'antennaDiameter'
            },
             {
                xtype:'numberfield',
                fieldLabel: 'Type',
                name: 'antennaType'
            },
             {
                xtype:'numberfield',
                fieldLabel: 'Minimum Tilt',
                name: 'minimumAntennaTilt'
            },
            {
                xtype:'numberfield',
                fieldLabel: 'Maximum Tilt',
                name: 'maximumAntennaTilt'
            },
             {
                xtype:'numberfield',
                fieldLabel: 'Number of Panels',
                name: 'numberOfPanelsAntenna'
            }
        ]
    }

});