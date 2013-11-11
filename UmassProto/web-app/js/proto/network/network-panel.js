/**
 * The primary container for viewing and editing Estimates.
 */
Ext.define('Casa.network.NetworkPanel', {

    extend: 'Ext.tab.Panel',
    alias: 'c.networkpanel',

    initComponent: function() {

        Ext.apply(this, {
            title: '&nbsp;',
            activeItem: 0,
            border: false,
            tabBar: {defaults:{height:24}},  // new default tab height seems to clip 16px icons...
//            defaults: {frame:true, bodyPadding:4},
            items: [
                Ext.create('c.networkinfo'),
                Ext.create('c.networkdescription'),
                Ext.create('c.networkcommunications'),
                Ext.create('c.networkdatainformation'),
                Ext.create('c.netsitesform')

            ],
            dockedItems: this.createToolbar()
        });

        this.callParent(arguments)
    },

    loadNetwork: function(stubRec) {
        console.log(stubRec)
        this.setTitle('Network: ' + stubRec.get('name'));
        Ext.Ajax.request({
            url: 'network/get/' + stubRec.get('id'),
            success: this.onLoadSuccess,
            failure: this.onLoadFailure,
            scope: this
        });
    },

    saveNetwork: function() {
        if(this._network){
            var activeForm = this.getActiveTab().getForm();
            activeForm.updateRecord(this._network);
            this._network.save({
                success: this.onNetworkUpdated,
                failure: this.networkUpdateFail,
                scope: this
            });
        }
    },


    //------------------------//
    //    Implementation      //
    //------------------------//
    createToolbar: function() {
        this._saveAction = Ext.create('Ext.Action', {
            text: 'Save',
            iconCls: 'icon-save',
            disabled: true
        });

        this._deleteAction = Ext.create('Ext.Action', {
            text: 'Delete',
            iconCls: 'icon-delete',
            disabled: true
        });

        return Ext.create('Ext.toolbar.Toolbar', {
            dock: 'bottom',
            defaults: {scope:this},
            items: ['->', '-', this._saveAction, this._deleteAction]
        })
    },

    onLoadSuccess: function(response) {
        var rawNetwork = Ext.decode(response.responseText);
        this._network = Ext.ModelManager.create(rawNetwork, 'Casa.Network');
        console.log(this._network);
        var allForms =this.query('form');
        Ext.Array.each(allForms, function(form){
                form.loadRecord(this._network)
            },
            this);
        var componentGrids = this.query('gridpanel');
        Ext.Array.each(componentGrids, function(grid){
            grid.loadNetwork(this._network)
        },
        this);
        //this.query('form').loadRecord(this._estimate);

        this.enableActions();
    },

    enableActions: function() {
        this._saveAction.enable();
        this._deleteAction.enable();
    },

    onNetworkUpdated: function() {
        this.getActiveTab().loadNetwork(this._network);
        NetworkBase.onNetworkUpdated(this._network);
        this.enableActions();
    },


    //TODO Give a good failure message
    networkUpdateFail: function() {
        Ext.MessageBox.alert('ERROR', 'Save Network Failed. ');
    },

    onLoadFailure: function(response) {
        Ext.Msg.alert('Error', 'Unable to load Network.')
    }

});
