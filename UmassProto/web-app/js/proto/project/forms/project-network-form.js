/**
 * Essential Estimate information.
 */
Ext.define('Casa.project.ProjectNetworksForm', {

    extend: 'Ext.form.Panel',
    alias: 'c.projnetform',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Networks',
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
           Ext.create('c.projnetgrid')
        ]
    }

});
