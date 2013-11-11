/**
 * A helper class for creating auto-loading, auto-syncing RESTful stores.
 * A config is required containing a Model and a URL.
 */
Ext.define('Casa.util.RestfulStore', {

    extend: 'Ext.data.Store',
    alias: 'c.restfulstore',

    constructor: function(config) {
        config = config || {};

        Ext.applyIf(config, {
            autoSync: true,
            proxy: {
                type: 'rest',
                url: 'rest/' + config.url,
                sortParam: undefined,
                pageParam: undefined,
                limitParam: undefined,
                startParam: undefined,
                reader: {
                    type: 'json',
                    root: 'data'
                },
                writer: {
                    type: 'json',
                    root: 'data',
                    writeAllFields: false
                },
                listeners: {exception: this.onException, scope:this}
            }
        });

        this.callParent([config])
    },

            
    //------------------------//
    //    Implementation      //
    //------------------------//
    onException: function(proxy, response) {
        console.log(response)
        response = Ext.decode(response.responseText);

        var errorList = '<ul>';
        Ext.Array.forEach(response.errors, function(err) {
            errorList += ('<li>' + err + '</li>');
        });
        errorList += '</ul>';

        Ext.Msg.alert('Error', response.message + '<br/>' + errorList);
    }

});