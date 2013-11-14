/**
 * Essential Estimate information.
 */
Ext.define('Casa.network.NetworkDescription', {

    extend: 'Ext.form.Panel',
    alias: 'c.networkdescription',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Description',
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
                fieldLabel: 'Areal Extent',
                name: 'areakExtent'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Spatial Density',
                name: 'spatialDensity'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Maps',
                name: 'maps'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Associated Geo Map',
                name: 'associatedGeoMap'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Network Description Pub Links',
                name: 'networkDescriptionPublicationLinks'
            },
             {
                xtype:'textfield',
                fieldLabel: 'Network Results Links',
                name: 'networkResultsLinks'
            }
        ]
    }

});