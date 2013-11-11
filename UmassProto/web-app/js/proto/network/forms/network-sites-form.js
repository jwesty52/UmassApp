/**
 * Essential Estimate information.
 */
Ext.define('Casa.network.NetworkSitesForm', {

    extend: 'Ext.form.Panel',
    alias: 'c.netsitesform',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Sites',
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
           Ext.create('c.netsitesgrid')
        ]
    }

});
