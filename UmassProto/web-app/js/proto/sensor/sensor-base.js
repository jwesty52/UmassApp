Ext.define('Casa.sesnor.SensorBase', {
    extend: 'Ext.form.Panel',
    alias: 'c.sensorbase',


    initComponent: function() {
        SensorBase = this;
        this.createWindowLayout()
        Ext.apply(this, {

            title: 'Sensors',
            id: 'sensorbase',
             width: 3000,
            height: 50000,
            layout: 'border',
//            padding: '5 5 0 5' ,
//            defaults: {padding: 4, border:0},

            items: [this._selector, this._panel]


        });

        this.callParent(arguments)
    },


    createWindowLayout: function() {



        this._selector = Ext.create('c.sensorselector', {
            region: 'west',
            listeners: {selectionchange:this.onSensorSelect, scope: this} ,
            flex: 1.4
        });

        this._panel = Ext.create('c.sensorpanel', {
            flex: 6,
            region: 'center'
        });
    },

    onSensorSelect: function(grid, recs) {
        if(recs.length > 0) {
            this._panel.saveSite();
            this._panel.loadSite(recs[0]);
        }
    }


});