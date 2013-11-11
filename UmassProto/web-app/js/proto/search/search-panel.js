Ext.define('Casa.search.SearchPanel', {

    extend: 'Ext.form.Panel',
    alias: 'c.searchpanel',


    initComponent: function() {
        CasaApp._searchPanel = this;
        this._searchLength = 1;
        this._searchLines = [true, false, false, false, false];
        Ext.apply(this, {
            frame:true,
            title: 'Search Fields',
            border: 0,
            height: 259,
            layout: 'fit',
            region: 'north',
            collapsible: true,

            items: this.searchFields()
        });
        this.callParent(arguments);
    },

    searchFields: function() {

        this._domainCombo = this.createDomainCombo();
        this._domainCombo.addListener( {select:this.onDomainSelect, scope: this} )

        this._operatorCombo = this.createOperatorCombo();
        this._operatorCombo.addListener({select:this.onOperatorSelect, scope: this})

        this._searchText = this.createSearchText();

        this._searchDate =this.createSearchDate();
        this._searchDateBetween = this.createSearchDate();

        this._addLineButton = Ext.create('Ext.button.Button', {
            tooltip:'Add new row',
            text:'+' ,
            height: 36,
            width: 25,
//            handler: this.addSearchRow,
            scope:this

        });


        this._searchForm = Ext.create('Ext.form.Panel', {

            layout: 'hbox',
            height: 37,
            frame: false,

            items: [
                this._addLineButton,
                this._domainCombo,
                {xtype:'displayfield', width: 20},
                this._operatorCombo,
                this._searchText,
                this._searchDate,
                this._searchDateBetween
            ]

        });



        this._searchWindow = Ext.create('Ext.form.Panel', {
            modal: true,
            buttonAlign: 'left',
//            layout: 'vbox',
//        height:70,
            buttons:[
                {
                    align: 'left',
                    text: 'Search', handler: function(){
//                BDManagerApp._TradeGrid.loadGridStore();
                    this.onSearch()
                },   scope: this
//                scope: BDManagerApp._tradeSearchPanel
                }
            ],
            width: 750,
            items: [this._searchForm
//                this._searchForm2, this._searchForm3, this._searchForm4, this._searchForm5
            ]

        });

        return this._searchWindow;

    },

    createDomainCombo: function() {
        return Ext.create('Ext.form.field.ComboBox', {
            store: this.createDomainStore(),
            margin: '1 0 0 0 ',
            fieldLabel: 'Field',
            displayField: 'label',
            valueField: 'domain',
            labelWidth: 35,
            width: 175,
            editable: false



        });
    },

    createOperatorCombo: function() {
        return Ext.create('Ext.form.field.ComboBox', {
            store: this.createOperatorStore(),
            margin: '1 0 0 0 ',
            fieldLabel: 'Operator',
            displayField: 'label',
            valueField: 'label',
            labelWidth: 55,
            width: 155,
            disabled: true,
            editable: false

        });
    },

    createDomainStore: function() {
        return Ext.create('Ext.data.Store', {
            fields: ['label', 'domain', 'type'],
            data: [
                {label: 'Sensor', domain:'sensor', type: 'text'},
                {label: 'Site', domain: 'site', type: 'text'},
                {label: 'Network', domain: 'network', type: 'date'},
                {label: 'Project', domain: 'project', type: 'text'},
                {label: 'Type', domain: 'type', type: 'text'},

                {label: 'Date', domain: 'date', type: 'date'}
            ]
        });
    },

    createOperatorStore: function() {
        return Ext.create('Ext.data.Store', {
            fields: ['label', 'type' ],
            data: [
                {label: 'Contains', type: 'text'},
                {label: 'Contains', type: 'number'},
                {label: 'Equals', type: 'text'},
                {label: 'Equals', type: 'number'},
                {label: 'Between', type: 'date'},
                {label: 'On', type: 'date'}
            ]
        });
    },

    createSearchText: function() {

        return Ext.create('Ext.form.field.Text', {
            emptyText: 'Search',
            width: 300,
            margin: '1 0 0 0 ',
            disabled: true,
            title: 'Search'


        });
    },

    createSearchDate : function() {
        return  Ext.create('Ext.form.field.Date', {
            emptyText: 'Search',
            width: 100,
            margin: '1 0 0 0 ',

            disabled: true,
            format: 'm/d/y'
        });
    },

    onDomainSelect: function(records) {

        this._operatorCombo.enable();
        this._operatorCombo.store.clearFilter(true);
        this._searchType = records.valueModels[0].data.type;

        //TODO: NOT IDEAL, find better way
        this._operatorCombo.store.filter('type', this._searchType);
        if(this._searchType == 'date'){
            this._searchText.hide();
            this._searchDate.show();
        }
        else{
            this._searchText.show();
            this._searchDate.hide();
        }
    },

    onOperatorSelect: function() {
        this._searchText.enable();
        this._searchDate.enable();
        if(this._operatorCombo.value == 'Between'){
            this._searchDateBetween.show();
            this._searchDateBetween.enable();
        }
        else{
            this._searchDateBetween.hide();
            this._searchDateBetween.disable()
        }
    },






    onSearch: function(){
        var s1;
        var s2;
        var s3, s4, s5;
        var op = new Array(this._operatorCombo.value
//        , this._operatorCombo2.value,this._operatorCombo3.value,this._operatorCombo4.value,this._operatorCombo5.value
        );
        var val = new Array(this._searchText.value
//        ,this._searchText2.value,this._searchText3.value,this._searchText4.value,this._searchText5.value
        );
        for(var i =0; i<1; i++) {
            if(op[i] == 'Contains'){
                op[i] = 'LIKE';
                val[i] = '%' + val[i] + '%'
            }
            else if((op[i] == 'Equals') || (op[i] =='On')){
                op[i] = '='
            }
            else if(op[i] == 'Between'){
                op[i] = 'BETWEEN'
            }
        }
        if(this._operatorCombo.value != null == this._domainCombo.value !=null) {

            if(this._searchType == 'date'){
                s1 = new Array(this._domainCombo.value, op[0], this._searchDate.value, this._searchDateBetween.value)
            }
            else{
                s1 = new Array(this._domainCombo.value,  op[0], val[0])
            }

//        if(!this._searchForm2.hidden) {
//            if(this._searchType2 == 'date'){
//                s2 = new Array(this._domainCombo2.value, op[1], this._searchDate2.value, this._searchDateBetween2.value)
//            }
//            else{
//                s2 = new Array(this._domainCombo2.value,  op[1], val[1])
//            }
//        }
//        else {
//            s2 = 'blank'
//        }
//
//        if(!this._searchForm3.hidden) {
//            if(this._searchType3 == 'date'){
//                s3 = new Array(this._domainCombo3.value, op[2], this._searchDate3.value, this._searchDateBetween3.value)
//            }
//            else{
//                s3 = new Array(this._domainCombo3.value, op[2], val[2])
//            }
//        }
//         else {
//            s3 = 'blank'
//        }
//
//        if(!this._searchForm4.hidden) {
//            if(this._searchType4 == 'date'){
//                s4 = new Array(this._domainCombo4.value, op[3], this._searchDate4.value, this._searchDateBetween4.value)
//            }
//            else{
//                s4 = new Array(this._domainCombo4.value, op[3], val[3])
//            }
//        }
//         else {
//            s4 = 'blank'
//        }
//
//        if(!this._searchForm5.hidden) {
//            if(this._searchType5 == 'date'){
//                s5 = new Array(this._domainCombo5.value, op[4], this._searchDate5.value, this._searchDateBetween5.value)
//            }
//            else{
//                s5 = new Array(this._domainCombo5.value,op[4], val[4])
//            }
//        }
//         else {
//            s5 = 'blank'
//        }

            CasaApp._SearchGrid.loadGridStore(s1, s2, s3, s4, s5, op);
        }

        var lc = Ext.util.Format.lowercase;
        var store = CasaApp._SearchGrid.getStore();
        var filter = new Array(this._domainCombo.value
//        ,this._domainCombo2.value,this._domainCombo3.value,this._domainCombo4.value,this._domainCombo5.value
        );
        var searchDate = new Array(this._searchDate.value
//        ,this._searchDate2.value,this._searchDate3.value,this._searchDate4.value,this._searchDate5.value
        );
        var searchType = new Array(this._searchType
//        ,this._searchType2,this._searchType3,this._searchType4,this._searchType5
        );
        var searchDateBetween = new Array(this._searchDateBetween.value
//        ,this._searchDateBetween2.value,this._searchDateBetween3.value,this._searchDateBetween4.value,this._searchDateBetween5.value
        );
        var searchText = new Array(this._searchText.value
//        ,this._searchText2.value,this._searchText3.value,this._searchText4.value,this._searchText5.value
        );
    }









})