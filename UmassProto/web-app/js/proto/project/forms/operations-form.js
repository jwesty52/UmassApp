
Ext.define('Casa.project.OperationsForm', {

    extend: 'Ext.form.Panel',
    alias: 'c.projoperationsform',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Operations Info',
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
                fieldLabel: 'Description',
                name: 'description'
            },
            {
                xtype:'datefield',
                fieldLabel: 'Start Date',
                name: 'startDate'
            },
            {
                xtype:'datefield',
                fieldLabel: 'End Date',
                name: 'endDate'
            },

            {
                xtype:'textfield',
                fieldLabel: 'Intensive Periods',
                name: 'intensiveOperationPeriods'
            }



        ]
    }

});