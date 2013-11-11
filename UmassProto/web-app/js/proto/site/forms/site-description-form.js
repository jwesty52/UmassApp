/**
 * Essential Estimate information.
 */
Ext.define('Casa.site.SiteDescription', {

    extend: 'Ext.form.Panel',
    alias: 'c.sitedescription',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Description/Classification',
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
                fieldLabel: 'List of Instruments',
                name: 'listOfInstruments'
            },

            {
                xtype:'textfield',
                fieldLabel: 'Type of Power Supply',
                name: 'typeOfPowerSupply'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Type of Communication',
                name: 'typeOfCommunication'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Potential Obstructions',
                name: 'potentialObstructions'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Land Cover Description',
                name: 'landCoverDescription'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Water Bodies Nearby',
                name: 'waterBodiesNearby'
            },
            {
                xtype:'textfield',
                fieldLabel: 'Terrain Features Nearby',
                name: 'terrainFeaturesNearby'
            },
            {
                xtype:'textfield',
                fieldLabel: 'DRC',
                name: 'drc'
            },
            {
                xtype:'textfield',
                fieldLabel: 'LCZ',
                name: 'lcz'
            },
            {
                xtype:'textfield',
                fieldLabel: 'UCZ',
                name: 'ucz'
            },
            {
                xtype:'textfield',
                fieldLabel: 'UTZ',
                name: 'utz'
            }
            
        ]
    }

});