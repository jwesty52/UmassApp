/**
 * Wrapper window for p.adminpanel
 */
Ext.define('Prose.admin.AdminWindow', {

    extend: 'Ext.window.Window',
    alias: 'p.adminwin',

    initComponent: function() {
        Ext.apply(this, {
            title: 'Admin',
            iconCls: 'icon-admin',
            layout: 'fit',
            closeAction: 'hide',
            modal: true,
            height: 700,
            width: 800,
            items: [Ext.create('p.adminpanel')],
            buttons: [{text:'Close', handler:this.close, scope:this}]
        });
        this.callParent(arguments)
    }

});