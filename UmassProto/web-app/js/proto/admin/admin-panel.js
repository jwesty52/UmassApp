/**
 * Utilities and editors for managing lookup data and other application settings.
 */
Ext.define('Prose.admin.AdminPanel', {

    extend: 'Ext.tab.Panel',
    alias: 'p.adminpanel',

    initComponent: function() {
        Ext.apply(this, {
            activeItem: 0,
            items: [Ext.create('p.employeegrid')]
        });
        this.callParent(arguments)
    }

});