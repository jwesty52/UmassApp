/**
 * Essential Estimate information.
 */
Ext.define('Casa.sensor.SensorTransmitter', {

    extend: 'Ext.form.Panel',
    alias: 'c.sensortransmitter',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Transmitter',
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
                fieldLabel: 'Frequency',
                name: 'transmitterFrequency'
            },
             {
                xtype:'numberfield',
                fieldLabel: 'Type',
                name: 'transmitterType'
            },
             {
                xtype:'numberfield',
                fieldLabel: 'Peak Power',
                name: 'transmietterPeakPower'
            },
             {
                xtype:'numberfield',
                fieldLabel: 'Average Power',
                name: 'transmitterAveragePower'
            }
        ]
    }

});