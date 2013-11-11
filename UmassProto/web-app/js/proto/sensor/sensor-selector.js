
Ext.define('Casa.sensor.SensorSelector', {

    extend: 'Ext.grid.Panel',
    alias: 'c.sensorselector',

    initComponent: function() {


        Ext.apply(this, {
            border: 0,
            title: 'Sensors',
            iconCls: 'icon-search',
            forceFit: true,
            collapsible: true,
            floatable: false,
            store: this.createStore(),
            hideHeaders: true,
            columns: [
//                {header:'Contact', dataIndex:'contact'},
                {header:'Sensor', dataIndex:'name'}
            ],
            features: [{
                ftype:'grouping',
                groupHeaderTpl: '{name} ({rows.length})',
                hideGroupedHeader: true
            }],
            dockedItems: [this.createToolbar()]
        });

        this.callParent(arguments)
    },


    //------------------------//
    //    Implementation      //
    //------------------------//
    createStore: function() {
        return Ext.create('store.json', {
            model: 'Casa.SensorStub',
            proxy: {
                type: 'ajax',
                url: 'sensor/list'
            },
            autoLoad: true
        });
    },

    createToolbar: function() {
        this._addAction = Ext.create('Ext.Action', {
            text: 'New Sensor',
            iconCls: 'icon-add-employee',
            handler: this.createSensor,
            scope: this
        });

        return Ext.create('widget.toolbar', {
            dock: 'bottom',
            items: [
                {
                    text: 'Refresh',
                    iconCls: 'icon-refresh',
                    handler: function() {this.getStore().load();},
                    scope: this
                }, this._addAction
            ]
        });
    } ,

    createSensor: function() {
        var store = Ext.create('store.json', {
            model: 'Casa.Employee',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'lookup/employee'
            }
        });


        var form = Ext.create('Ext.form.Panel', {



            frame: true,
            url: 'rest/sensor/create',
            fieldDefaults: {labelWidth: 80, width: 260},
            items: [
                {xtype: 'textfield', name:'name', fieldLabel: 'Name', allowBlank: false}
            ],
            buttons: [
                {
                    text: 'Submit',
                    handler: function() {

                        form.submit();

                    }
                },{
                    text: 'Cancel',
                    handler: function() {
                        this._window.close();
                    }, scope:this
                }

            ]
//            listeners:{actioncomplete:this.onSensorCreated, scope:this}
        });

        this._window = Ext.create('Ext.window.Window', {
            title: 'Add new Sensor',
            iconCls: 'icon-add',
            layout: 'fit',
            modal: true,
            height: 235,
            width: 300,
            items: form
        });

        this._window.show();
        form.items.first().focus();
    }

});