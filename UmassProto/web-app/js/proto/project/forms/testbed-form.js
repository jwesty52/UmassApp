/**
 * Essential Estimate information.
 */
Ext.define('Casa.project.TestbedForm', {

    extend: 'Ext.form.Panel',
    alias: 'c.projtestbedform',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Testbed Info',
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
                fieldLabel: 'Total Network Areal Extent',
                name: 'totalNetworkArealExtent'
            },

            {
                xtype:'textfield',
                fieldLabel: 'Network Map',
                name: 'networkMap'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Associated Geo Socio Data Map',
                name: 'associatedGeoSocioDataMap'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Description Publication',
                name: 'projectDescriptionPublication'
            },
            
            {
                xtype:'textfield',
                fieldLabel: 'Result Publication',
                name: 'projectResultPulication'
            }
         


        ]
    }

});