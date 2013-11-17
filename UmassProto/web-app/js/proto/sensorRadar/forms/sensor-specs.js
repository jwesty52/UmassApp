/**
 * Essential Estimate information.
 */
Ext.define('Casa.sensor.SensorSpecs', {

    extend: 'Ext.form.Panel',
    alias: 'c.sensorspecs',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Specifications',
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
                fieldLabel: 'Beam Width Azimuth',
                name: 'beamWidthAzimuth'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Beam Width Elevation',
                name: 'beamWidthElevation'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Range Gate Spacing',
                name: 'rangeGateSpacing'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Maximum Range',
                name: 'maximumRange'
            }
        ]
    }

});