/**
 * Essential Estimate information.
 */
Ext.define('Casa.site.SiteMapsPhotosForm', {

    extend: 'Ext.form.Panel',
    alias: 'c.sitemapsphotos',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Maps and Photo Links',
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
                fieldLabel: 'Site Photo',
                name: 'sitePhotoLink'
            },

            {
                xtype:'textfield',
                fieldLabel: 'Cardinal Photo',
                name: 'cardinalPhotoLink'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Panoramic Photo',
                name: 'panoramicPhotoLink'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Fisheye Photo',
                name: 'fisheyePhotoLink'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Local Maps',
                name: 'localMapsLink'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Aerial Photos',
                name: 'aerialPhotoLink'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Sketch Map',
                name: 'sketchMapLink'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Satellite Imagery',
                name: 'satelliteImageryLink'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Horizon Map',
                name: 'horizonMapLink'
            }
            
        ]
    }

});