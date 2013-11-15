Ext.define('Casa.sensor.MainPanel', {

    extend: 'Ext.tab.Panel',
    alias: 'c.sensorpanel',

    initComponent: function() {

        Ext.apply(this, {
            title: '&nbsp;',
            activeItem: 0,
            border: false,
            tabBar: {defaults:{height:24}},  // new default tab height seems to clip 16px icons...
            defaults: {frame:true, bodyPadding:4},
            items: [
                Ext.create('c.sensorinfo'),
                Ext.create('c.sensordescription'),
                Ext.create('c.sensorspecs'),
                Ext.create('c.sensorantenna'),
                Ext.create('c.sensortransmitter'),
                Ext.create('c.sensorwaveform'),
                Ext.create('c.sensorpolar'),
                Ext.create('c.sensorquality'),
                Ext.create('c.sensorscan')

//
            ],
            dockedItems: this.createToolbar()
        });

        this.callParent(arguments)
    },

    loadSensor: function(stubRec) {
        console.log(stubRec);
        this.setTitle('Sensor: ' + stubRec.get('name'));
        Ext.Ajax.request({
            url: 'sensor/get/' + stubRec.get('id'),
            success: this.onLoadSuccess,
            failure: this.onLoadFailure,
            scope: this
        });
    },

    saveSensor: function() {
        if(this._sensor){
            var activeForm = this.getActiveTab().getForm();
            activeForm.updateRecord(this._sensor);
            this._sensor.save({
                success: this.onSensorUpdated,
                failure: this.sensorUpdateFail,
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
        var rawSensor = Ext.decode(response.responseText);
        this._sensor = Ext.ModelManager.create(rawSensor, 'Casa.Sensor');
        console.log(this._sensor);
        var allForms =this.query('form');
        Ext.Array.each(allForms, function(form){
                form.loadRecord(this._sensor)
            },
            this);
        var componentGrids = this.query('gridpanel');
        Ext.Array.each(componentGrids, function(grid){
            grid.loadSensor(this._sensor)
        },
        this);
        //this.query('form').loadRecord(this._estimate);

        this.enableActions();
    },

    enableActions: function() {
        this._saveAction.enable();
        this._deleteAction.enable();
    },

    onSensorUpdated: function() {
        this.getActiveTab().loadSensor(this._sensor);
        SensorBase.onSensorUpdated(this._sensor);
        this.enableActions();
    },


    //TODO Give a good failure message
    sensorUpdateFail: function() {
        Ext.MessageBox.alert('ERROR', 'Save Sensor Failed. ');
    },

    onLoadFailure: function(response) {
        Ext.Msg.alert('Error', 'Unable to load Sensor.')
    }

});
