/**
 * Essential Estimate information.
 */
Ext.define('Casa.network.DataInformation', {

    extend: 'Ext.form.Panel',
    alias: 'c.networkdatainformation',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Data Information',
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
                fieldLabel: 'Data Format',
                name: 'dataFormat'
            },

            {
                xtype:'textfield',
                fieldLabel: 'Time Format',
                name: 'timeFormat'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Data Access Rights',
                name: 'dataAccessRights'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Access Information',
                name: 'accessInformation'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Archive Data Center',
                name: 'archiveDataCenter'
            }

        ]
    }


});