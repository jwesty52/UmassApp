/**
 * Essential Estimate information.
 */
Ext.define('Casa.sensor.SensorQuality', {

    extend: 'Ext.form.Panel',
    alias: 'c.sensorquality',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Quality Control',
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
                fieldLabel: 'Quality Control Flags',
                name: 'qualityControlFlagsListAndDescription'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Signal Processing Flow',
                name: 'signalProcessingFlowDescription'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Moment Estimation Equations',
                name: 'momentEstimationEquationsDescription'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Attenuation Correction Algorithms',
                name: 'attenuationCorrectionAlgorithmsDescription'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Clutter Removal Algorithms',
                name: 'clutterRemovalAlgorithmsDescription'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Clutter Filter Map Used',
                name: 'clutterFilterMapUsed'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Velocity Dealiasing Algorithms ',
                name: 'velocityDealiasingAlgorithmsDescription'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Range Folding Threshold',
                name: 'rangeFoldingThreshold'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Signal To Noise Ratio Threshold',
                name: 'signalToNoiseRatioThreshold'
            }
        ]
    }

});