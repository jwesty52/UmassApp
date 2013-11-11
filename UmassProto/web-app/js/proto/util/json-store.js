/**
 * A helper class for creating a (non-RESTful) read-only JSON store.
 * Mainly exists to tamp down the remote page/limit/sort stuff Ext sends by default.
 * A config is required containing a Model and a URL.
 */
Ext.define('Casa.util.JsonStore', {

    extend: 'Ext.data.JsonStore',
    alias: 'c.jsonstore',

    constructor: function(config) {
        config = config || {};

        Ext.applyIf(config, {
            proxy: {
                type: 'ajax',
                url: config.url,
                sortParam: undefined,
                pageParam: undefined,
                limitParam: undefined,
                startParam: undefined
            }
        });

        this.callParent([config])
    }

});