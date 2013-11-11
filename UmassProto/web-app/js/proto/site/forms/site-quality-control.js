/**
 * Essential Estimate information.
 */
Ext.define('Casa.site.SiteQualityControlForm', {

    extend: 'Ext.form.Panel',
    alias: 'c.sitequality',

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
                fieldLabel: 'Station History',
                name: 'stationHistory'
            },

            {
                xtype:'textfield',
                fieldLabel: 'QC Visits',
                name: 'qcVisits'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Maintenance Log',
                name: 'maintenanceLog'
            }
            
        ]
    }

});