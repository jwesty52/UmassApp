/**
 * Essential Estimate information.
 */
Ext.define('Casa.sensor.SensorCalibration', {

    extend: 'Ext.form.Panel',
    alias: 'c.sensorcalibration',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Calibration',
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
                fieldLabel: 'Calibration Constants',
                name: 'calibrationConstants'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Dates Of Calibration',
                name: 'datesOfCalibration'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Date Of Maintenance',
                name: 'dateOfMaintenance'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Period Of Downtime For Maintenance',
                name: 'maximumRange'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Solar Calibration Process',
                name: 'solarCalibrationProcessDescription'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Spectral Analyzer Calibration Process',
                name: 'spectralAnalyzerCalibrationProcessDescription'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Noise Source Receiver Chain Calibration Information',
                name: 'noiseSourceReceiverChainCalibrationInformationDescription'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Reflectivity Calibration Process',
                name: 'reflectivityCalibrationProcessDescription'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Additional Calibration Techniques Applied',
                name: 'additionalCalibrationTechniquesApplied'
            },
             {
                xtype:'textfield',
                fieldLabel: 'System Alarms',
                name: 'systemAlarmsDescription'
            }

        ]
    }

});