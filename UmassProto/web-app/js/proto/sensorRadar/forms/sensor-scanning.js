/**
 * Essential Estimate information.
 */
Ext.define('Casa.sensor.SensorScanning', {

    extend: 'Ext.form.Panel',
    alias: 'c.sensorscan',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Scanning',
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
                fieldLabel: 'Scanning Strategy',
                name: 'scanningStrategyDescription'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Scan Type Options Available',
                name: 'scanTypeOptionsAvailable'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Number Of Elevation Scans Within Volume',
                name: 'numberOfElevationScansWithinVolumeScan'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Elevation Scans Comprise Volume',
                name: 'elevationScansCompriseVolumeScan'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Maximum Scan Rotation Speed',
                name: 'maximumScanRotationSpeed'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Maximum Scan Rotation Acceleration',
                name: 'maximumScanRotationAcceleration'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Range To Center Of First Bin',
                name: 'rangeToCenterOfFirstBin'
            }
        ]
    }

});