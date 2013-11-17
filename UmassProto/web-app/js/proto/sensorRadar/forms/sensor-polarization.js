/**
 * Essential Estimate information.
 */
Ext.define('Casa.sensor.SensorPolarization', {

    extend: 'Ext.form.Panel',
    alias: 'c.sensorpolar',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Polarization',
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
                xtype:'textfield',
                fieldLabel: 'Polarization',
                name: 'polarization'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Mode Of Dual Polarization',
                name: 'modeOfDualPolarization'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Transmitter Power Horizontal',
                name: 'transmitterPowerHorizontal'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Transmitter Power Vertical',
                name: 'transmitterPowerVertical'
            },
            {
                xtype:'textfield',
                fieldLabel: 'ZDR Calibration Description',
                name: 'zdrCalibrationDescription'
            }
        ]
    }

});