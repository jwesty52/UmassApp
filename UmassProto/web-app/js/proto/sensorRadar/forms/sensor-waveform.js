/**
 * Essential Estimate information.
 */
Ext.define('Casa.sensor.SensorWaveform', {

    extend: 'Ext.form.Panel',
    alias: 'c.sensorwaveform',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Waveform',
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
                fieldLabel: 'Type',
                name: 'waveformType'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Pulse Compression',
                name: 'pulseCompression'
            },
             {
                xtype:'numberfield',
                fieldLabel: 'Pulse Width',
                name: 'pulseWidth'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Pulse Repetition Frequencies Description',
                name: 'pulseRepetitionFrequenciesDescription'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Type of Multiple PRF Used',
                name: 'typeOfMultiplePrfUsed'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Staggered PRT',
                name: 'staggeredPrt'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Dithered Sampling',
                name: 'ditheredSampling'
            },
             {
                xtype:'textfield',
                fieldLabel: 'SZ2 Processing Description',
                name: 'sz2ProcessingDescription'
            }
        ]
    }

});