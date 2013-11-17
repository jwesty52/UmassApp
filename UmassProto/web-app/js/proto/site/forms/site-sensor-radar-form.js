/**
 * Essential Estimate information.
 */
Ext.define('Casa.site.SiteSensorRadarForm', {

    extend: 'Ext.form.Panel',
    alias: 'c.sitesensorform',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Sensor Radars',
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
           Ext.create('c.sitesensorgrid')
        ]
    }

});
