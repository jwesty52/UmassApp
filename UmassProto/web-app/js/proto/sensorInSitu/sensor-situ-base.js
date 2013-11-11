Ext.define('Casa.sensorSitu.SensorSituBase', {
    extend: 'Ext.form.Panel',
    alias: 'c.sensorsitubase',


    initComponent: function() {
        SensorSituBase = this;
        this.createWindowLayout()
        Ext.apply(this, {

            title: 'SensorInSitu',
            id: 'sensorsitubase',
             width: 3000,
            height: 50000,
//            layout: 'border'
//            padding: '5 5 0 5' ,
//            defaults: {padding: 4, border:0},

//            items: [this._selector, this._panel]


        });

        this.callParent(arguments)
    },

     buttonSelect: function() {},


    createWindowLayout: function() {



//        this._selector = Ext.create('c.sensorsituselector', {
//            region: 'west',
//            listeners: {selectionchange:this.onSensorSelect, scope: this} ,
//            flex: 1.4
//        });
//
//        this._panel = Ext.create('c.sensorsitupanel', {
//            flex: 6,
//            region: 'center'
//        });
    },

    onSensorSelect: function(grid, recs) {
        if(recs.length > 0) {
            this._panel.saveSite();
            this._panel.loadSite(recs[0]);
        }
    }


});