Ext.define('Casa.search.SearchBase', {

    extend: 'Ext.form.Panel',
    alias: 'c.searchbase',

     modelClass: 'BDManager.RadarData',

    initComponent: function() {
        CasaApp._contactForm = this;
        Ext.apply(this, {
            frame:true,
            title: 'Search',
           layout: 'border',
            defaults: {border:0},
            items: this.createFieldset()
        });
        this.loadStore()
        this.callParent(arguments);
    },

    buttonSelect: function() {},

    createFieldset: function() {
        this._search = Ext.create('c.searchpanel')
        this._grid = Ext.create('c.searchgrid');

        return [this._search, this._grid ]

    },

    loadStore: function(){
//        this._grid.loadGridStore();
}
});