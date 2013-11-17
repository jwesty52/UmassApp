Ext.define('Casa.site.MainPanel', {

    extend: 'Ext.tab.Panel',
    alias: 'c.sitepanel',

    initComponent: function() {

        Ext.apply(this, {
            title: '&nbsp;',
            activeItem: 0,
            border: false,
            tabBar: {defaults:{height:24}},  // new default tab height seems to clip 16px icons...
            defaults: {frame:true, bodyPadding:4},
            items: [
                Ext.create('c.siteinfo'),
                Ext.create('c.sitedescription'),
                Ext.create('c.sitequality'),
                Ext.create('c.sitemapsphotos'),
                Ext.create('c.sitesensorform')

            ],
            dockedItems: this.createToolbar()
        });

        this.callParent(arguments)
    },

    loadSite: function(stubRec) {
        console.log(stubRec)
        this.setTitle('Site: ' + stubRec.get('name'));
        Ext.Ajax.request({
            url: 'site/get/' + stubRec.get('id'),
            success: this.onLoadSuccess,
            failure: this.onLoadFailure,
            scope: this
        });
    },

    saveSite: function() {
        if(this._site){
            var activeForm = this.getActiveTab().getForm();
            activeForm.updateRecord(this._site);
            this._site.save({
                success: this.onSiteUpdated,
                failure: this.siteUpdateFail,
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
        var rawSite = Ext.decode(response.responseText);
        this._site = Ext.ModelManager.create(rawSite, 'Casa.Site');
        console.log(this._site);
        var allForms =this.query('form');
        Ext.Array.each(allForms, function(form){
                form.loadRecord(this._site)
            },
            this);
        var componentGrids = this.query('gridpanel');
        Ext.Array.each(componentGrids, function(grid){
            grid.loadSite(this._site)
        },
        this);
        //this.query('form').loadRecord(this._estimate);

        this.enableActions();
    },

    enableActions: function() {
        this._saveAction.enable();
        this._deleteAction.enable();
    },

    onSiteUpdated: function() {
        this.getActiveTab().loadSite(this._site);
        SiteBase.onSiteUpdated(this._site);
        this.enableActions();
    },


    //TODO Give a good failure message
    siteUpdateFail: function() {
        Ext.MessageBox.alert('ERROR', 'Save Site Failed. ');
    },

    onLoadFailure: function(response) {
        Ext.Msg.alert('Error', 'Unable to load Site.')
    }

});
