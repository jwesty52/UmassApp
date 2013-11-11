/**
 * Essential Estimate information.
 */
Ext.define('Casa.network.NetworkInfo', {

    extend: 'Ext.form.Panel',
    alias: 'c.networkinfo',

    initComponent: function() {
        Ext.apply(this, {
            title: 'General Information',
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
                fieldLabel: 'Name',
                name: 'name'
            },
        ]
    }

});