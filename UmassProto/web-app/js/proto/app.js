Ext.define('UmassProto.App',{

    extend: 'Ext.container.Viewport',

    initComponent: function() {
//        Ext.Loader.setConfig({enabled:true});
        this.defineModels();

//        this.createGlobals();
        CasaApp = this;
        Ext.apply(this, {
            layout: 'fit',
            id: 'base',
            items: this.createLayout()
        });

        this.callParent(arguments);
    },

//    showAdmin: function() {
//        if (!this._adminWin) this._adminWin = Ext.create('p.adminwin');
//        this._adminWin.show();
//    },

    writeHeaderHtml: function() {
        return '<style="float:left;margin:0 0px 0 0px;"/>' +
            '<div style="color: rgb(0,0,0);margin:0px 6px 0 6px;float:left"> ' +
//            'Welcome ' + this.user.name +  ' | <a href="logout/">Log out</a></div> ' +
            '<h2 style="float:left;"> CASA  </h2>'



    },



    //------------------------//
    //    Implementation      //
    //------------------------//
//    createl: function() {
//
//        this._searchBase = Ext.create('c.searchbase');
//
//        this._projectBase = Ext.create('c.projbase');
//
//        this._networkBase = Ext.create('c.networkbase');
//
//        this._siteBase = Ext.create('c.sitebase');
//
//        this._sensorBase = Ext.create('c.sensorbase');
//
//        return {
//            layout: 'accordion',
////            defaults: {border:0},
//            items: [ this._projectBase, this._networkBase, this._siteBase, this._sensorBase, this._searchBase]
//        };
//    },

    createLayout: function() {


        this._searchBase = Ext.create('c.searchbase', {
            hidden: true
        });

        this._projectBase = Ext.create('c.projbase', {
            hidden: true
        });

        this._networkBase = Ext.create('c.networkbase', {
            hidden: true
        });

        this._siteBase = Ext.create('c.sitebase', {
            hidden: true
        });

        this._sensorBase = Ext.create('c.sensorbase', {
            hidden: true
        });

        this._sensorSituBase = Ext.create('c.sensorsitubase', {
            hidden: true
        });






        this._rec = 0;
        this._panel = this._projectBase;

        this._main = Ext.create('Ext.tab.Panel', {
//            title: this.writeHeaderHtml(),
            width: 500,
            tabBar: {hidden: true},
            region: 'center' ,
            id : 'mainTab',
            height: 500,
//            layout:'fit',
            items: [ this._projectBase, this._networkBase, this._siteBase, this._sensorBase, this._sensorSituBase, this._searchBase],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'right',
                width: 85,
                items:

                    [


                        {
                            xtype:'button',
                            text: 'Project',
//                            iconCls: 'icon-trade',
                            cls: 'x-btn-big',
                            scale   : 'large',


                            pressed:true,
                            enableToggle: true,
                            handler: function() {this.changePanel(this._projectBase,0);}, scope: this


                        },'-',
                        {
                            xtype:'button',
                            text: 'Network',
                            scale   : 'large',
//                            iconCls: 'icon-broker',
                            cls: 'x-btn-big',

                            enableToggle: true,
                            handler: function() {this.changePanel(this._networkBase,2);}, scope: this
//                            disabled: ActiveUser.role == ('ROLE_BROKER') || ActiveUser.role == ('ROLE_FIRMMANAGER') ||
//                                ActiveUser.role == ('ROLE_FIRMADMIN')


                        },'-',
                        {
                            xtype:'button',
                            text: 'Sites',
                            scale   : 'large',
//                            iconCls: 'icon-employee',
                            cls: 'x-btn-big',
                            enableToggle: true,
                            handler: function() {this.changePanel(this._siteBase,4);}, scope: this
//                            disabled: ActiveUser.role == ('ROLE_BROKER') || ActiveUser.role == ('ROLE_FIRMMANAGER')


                        },'-',
                        {
                            xtype:'button',
                            text: 'Sensor Radar',
                            scale   : 'large',
//                            iconCls: 'icon-maintenance',
                            cls: 'x-btn-big',
                            enableToggle: true,
                            handler: function() {this.changePanel(this._sensorBase,6);}, scope: this
//                            disabled: ActiveUser.role == ('ROLE_BROKER') || ActiveUser.role == ('ROLE_FIRMMANAGER')


                        },'-',
                        {
                            xtype:'button',
                            text: 'SensorInSitu',
                            scale   : 'large',
//                            iconCls: 'icon-automation',
                            cls: 'x-btn-big',
                            enableToggle: true,
                            handler: function() {this.changePanel(this._sensorSituBase,8);}, scope: this
//                            disabled: ActiveUser.role == ('ROLE_BROKER') || ActiveUser.role == ('ROLE_FIRMMANAGER')


                        }, '-',
                        {
                            xtype:'button',
                            text: 'Search',
//                            iconCls: 'icon-report',
                            cls: 'x-btn-big',
                            scale   : 'large',


                            enableToggle: true,
                            handler: function() {this.changePanel( this._searchBase,10);}, scope: this
                        }


                    ]
            }]


        });


        return {
            layout: 'fit',
//                defaults: {border:0},
            items: [this._main ]
        }
    },

    changePanel: function(panel,rec,toggle) {
//        console.log(panel)
//        console.log(rec)
        console.log(this._rec);
        this._main.dockedItems.items[0].items.items[this._rec].toggle();
        this._panel.hide();
        panel.show();
        this._rec = rec;
        this._panel = panel;
        console.log(panel);
        this._panel.buttonSelect();
        if(toggle){
            this._main.dockedItems.items[0].items.items[this._rec].toggle();
        }
        console.log(this._rec)
    },


    defineModels: function() {
//        var toId = function(v) {if(v != null) {return Ext.isPrimitive(v) ? v : v.id;}};
//        Ext.JSON.encodeDate = function(d) {
//            return Ext.Date.format(d, '"Y-m-d"');
//        };


        Ext.define('Casa.ProjectStub', {
            extend: 'Ext.data.Model',
            fields: [{name: 'id', useNull: true}, 'employee', 'name']
        });

        Ext.define('Casa.NetworkStub', {
            extend: 'Ext.data.Model',
            fields: [{name: 'id', useNull: true}, 'description', 'name']
        });


        Ext.define('Casa.SiteStub', {
            extend: 'Ext.data.Model',
            fields: [{name: 'id', useNull: true}, 'name']
        });

        Ext.define('Casa.SensorStub', {
            extend: 'Ext.data.Model',
            fields: [{name: 'id', useNull: true}, 'description', 'name']
        });

        Ext.define('Casa.Network', {
            extend: 'Ext.data.Model',
            fields: [{name: 'id', useNull: true},
                'description',
                'name',
                'website',
                'type',
                'description',
                'partners',
                'variables',
                'history',
                'contact',
                'arealExtent',
                'spatialDesnity',
                'map',
                'associatedGeoMap',
                'networkDescriptionPublicationLinks',
                'networkResultsLinks',
                'topology',
                'modeOfTransmission',
                'bandwithRequirementsPerSite',
                'estimatedLatency',
                'dataCollectionPoint',
                'dataFormat',
                'timeFormat',
                'dataAccessRights',
                'accessInformation',
                'archiveDataCenter',
                'websiteForDataAccess',
                'processingSteps',
                'formulaeForCalculations',
                'qualityControlFlags',
                'qualityControlAlgorithms',
                'filteringTechniquesUsed',
                'dataReductionMethods',
                'potentialOrKnownBiasesAndErrors',
                'publicationQualityControlLinks',
                {name: 'lastUpdateDate', type: 'date', dateFormat: 'time'}

            ]
        });

        Ext.define('Casa.Project', {
            extend: 'Ext.data.Model',
            fields: [{name: 'id', useNull: true},
                'contact',
                'name',
                'website',
                'description',
                'history',
                'partners',
                {name: 'updateDate', type: 'date', dateFormat: 'time'},
                'organization',
                'operationDescription',
                {name: 'startDate', type: 'date', dateFormat: 'time'},
                {name: 'endDate', type: 'date', dateFormat: 'time'} ,
                'intensiveOperationPeriods',
                'totalNetworkArealExtent',
                'networkMap',
                'associtaedGeoSocioDataMap',
                'projectDescriptionPublication',
                'projectResultPublication'

            ],
            proxy: {
                type: 'rest',
                url: 'rest/project',
                reader: {
                    type: 'json',
                    root: 'data'
                },
                writer: {
                    type: 'json',
                    root: 'data',
                    writeAllFields: false
                }
            }
        });

        Ext.define('Casa.Site', {
            extend: 'Ext.data.Model',
            fields:  [
                {name: 'id', useNull: true},
                'siteId',
                'name',
                'status',
                'alias',
                'type',
                'county',
                'state',
                'latitude',
                'longitude',
                'elevation',
                'address',
                'directions',
                'accessLimitations',
                'organization',
                'contact',
                {name: 'startDate', type: 'date', dateFormat: 'time'},
                {name: 'endDate', type: 'date', dateFormat: 'time'} ,
                'listOfInstruments',
                'typeOfPowerSupply',
                'typeOfCommunication',
                'potentialObstructions',
                'landCoverDescription',
                'waterBodiesNearby',
                'terrainFeaturesNearby',
                'drc',
                'lcz',
                'ucz',
                'utz',
                'sitePhotoLink',
                'cardinalPhotoLink',
                'panoramicPhotoLink',
                'fisheyePhotoLink',
                'localMapsLink',
                'aerialPhotoLink',
                'sketchMapLink',
                'satelliteImageryLink',
                'horizonMapLink',
                'stationHistory',
                'qcVisits',
                'maintenanceLog'


            ]
        });

        Ext.define('Casa.SensorRadar', {
            extend: 'Ext.data.Model',
            fields: [
                {name: 'id', useNull: true},
                'instrumentId',
                'name',
                'location',
                'county',
                'state',
                'latitude',
                'longitude',
                'heightMSL',
                'heightAboveGround',
                'parentNetwork',
                'numberOfLikeSensorsInParentNetwork',
                {name: 'installationDate', type: 'date', dateFormat: 'time'},
                {name: 'decommissionDate', type: 'date', dateFormat: 'time'} ,
                {name: 'startDate', type: 'date', dateFormat: 'time'},
                {name: 'endDate', type: 'date', dateFormat: 'time'} ,
                'dataTransmissionFrequency',
                'outputVariable',
                'variableUnit',
                'dataAccessibility',
                'dataLink',
                'photoLink',
                'contact',
                'organization',
                'description',
                'manufacturer',
                'make',
                'model',
                'approximateDimensions',
                'approximateWeight',
                'radarCategory',
                'beamWidthAzimuth',
                'beamWidthElevation',
                'rangeGateSpacing',
                'maximumRange' ,
                'antennaGain',
                'antennaDiameter',
                'antennaType',
                'minimumAntennaTilt',
                'maximumAntennaTilt',
                'numberOfPanelsAntenna',
                'transmitterFrequency',
                'transmitterType',
                'transmitterPeakPower',
                'transmitterAveragePower',
                'radomeDescription',
                'waveformType',
                'pulseCompression',
                'pulseWidth',
                'pulseRepetitionFrequenciesDescription',
                'typeOfMultiplePrfUsed',
                'staggeredPrt',
                'ditheredSampling',
                'sz2ProcessingDescription',
                'polarization',
                'modeOfDualPolarization',
                'transmitterPowerHorizontal',
                'transmitterPowerVertical',
                'zdrCalibrationDescription',
                'calibrationConstants',
                'datesOfCalibration',
                'dateOfMaintenance',
                'periodOfDowntimeForMaintenance',
                'solarCalibrationProcessDescription',
                'spectralAnalyzerCalibrationProcessDescription',
                'noiseSourceReceiverChainCalibrationInformationDescription',
                'reflectivityCalibrationProcessDescription',
                'additionalCalibrationTechniquesApplied',
                'systemAlarmsDescription',
                'qualityControlFlagsListAndDescription',
                'signalProcessingFlowDescription',
                'momentEstimationEquationsDescription',
                'attenuationCorrectionAlgorithmsDescription',
                'clutterRemovalAlgorithmsDescription',
                'clutterFilterMapUsed',
                'velocityDealiasingAlgorithmsDescription',
                'rangeFoldingThreshold',
                'signalToNoiseRatioThreshold',
                'scanningStrategyDescription',
                'scanTypeOptionsAvailable',
                'numberOfElevationScansWithinVolumeScan',
                'elevationScansCompriseVolumeScan',
                'maximumScanRotationSpeed',
                'maximumScanRotationAcceleration',
                'rangeToCenterOfFirstBin'

            ]
        });

        Ext.define('Casa.SensorInSitu', {
            extend: 'Ext.data.Model',
            fields: [
                {name: 'id', useNull: true},
                'instrumentId',
                'name',
                'location',
                'county',
                'state',
                'latitude',
                'longitude',
                'heightMSL',
                'heightAboveGround',
                'parentNetwork',
                'numberOfLikeSensorsInParentNetwork',
                {name: 'installationDate', type: 'date', dateFormat: 'time'},
                {name: 'decommissionDate', type: 'date', dateFormat: 'time'} ,
                {name: 'startDate', type: 'date', dateFormat: 'time'},
                {name: 'endDate', type: 'date', dateFormat: 'time'} ,
                'dataTransmissionFrequency',
                'outputVariable',
                'variableUnit',
                'dataAccessibility',
                'dataLink',
                'photoLink',
                'organization',
                'contact',
                'description',
                'manufacturer',
                'make',
                'model',
                'operatingPrinciples',
                'equations',
                'maximumOperatingRange',
                'minimumOperatingRange',
                'accuracy',
                'resolution',
                'smaplingFrequency',
                'averagingPeriod',
                'calibrationConstants',
                'datesOfCalibration',
                'methodOfCalibration',
                'dateOfMaintenance',
                'periodOfDowntimeForMaintenance',
                {name: 'lastSensorReplacement', type: 'date', dateFormat: 'time'} ,
                'descriptionQCQA',
                'knownBiasesOrLimitations',
                'qualityControlFlags'
            ]

        });


        Ext.define('Casa.RadarData', {
            extend: 'Ext.data.Model',
            fields: [{name: 'id', useNull: true}, 'sensor', 'type', 'url',   {name: 'date', type: 'date', dateFormat: 'time'}]
//             proxy: {
//                type: 'rest',
//                url: 'rest/radarData',
//                reader: {
//                    type: 'json',
//                    root: 'data'
//                },
//                writer: {
//                    type: 'json',
//                    root: 'data',
//                    writeAllFields: false
//                }
//            }
        });

    }


});