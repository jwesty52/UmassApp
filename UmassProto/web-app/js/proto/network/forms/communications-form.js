/**
 * Essential Estimate information.
 */
Ext.define('Casa.network.CommunicationsForm', {

    extend: 'Ext.form.Panel',
    alias: 'c.networkcommunications',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Communications',
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



        return [   {
            xtype:'textfield',
            fieldLabel: 'Topology',
            name: 'topology'
        },

            {
                xtype:'textfield',
                fieldLabel: 'Mode of Transmission',
                name: 'modeOfTransmission'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Bandwith Requirements Per Site',
                name: 'bandwidthRequirementsPerSite'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Estimated Latency',
                name: 'estimatedLatency'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Data Collection Point',
                name: 'dataCollectionPoint'
            }

            ]
    }


});