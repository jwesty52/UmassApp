package com.umass.rest

import com.umass.base.RestController
import com.umass.Site
import com.umass.Network
import org.codehaus.groovy.grails.web.json.JSONObject

class SiteController extends RestController {

    def restTarget = com.umass.Site

    def list = {
        def p = Site.list()
//        log.info(p)
        renderJSON(p.collect{e -> [
                id: e.id,
                name: e.name

        ]
        })
    }

    def listByNetwork = {
//        log.info('here')
        def p = Site.findAllByNetwork(Network.findById(params.network))
        log.info(p)
        renderJSON(p.collect{e -> [
                id: e.id,
                name: e.name,


        ]
        })
    }

    def get = {
//        log.info(params)
        renderJSON(Site.get(params.id))
    }

    def preprocessSubmit = {JSONObject submit ->
        if (submit.has('network')) {
            submit.network = Network.get(submit.network)
        }
    }



}

