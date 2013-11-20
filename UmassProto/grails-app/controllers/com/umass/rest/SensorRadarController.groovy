package com.umass.rest

import com.umass.base.RestController
import com.umass.SensorRadar
import com.umass.Site
import org.codehaus.groovy.grails.web.json.JSONObject

class SensorRadarController extends RestController {

    def restTarget = com.umass.SensorRadar

    def list = {
        def p = SensorRadar.list()
        renderJSON(p.collect{e -> [
                id: e.id,
                name: e.name,

        ]
        })
    }

    def listBySite = {
        log.info('here')
        def p = SensorRadar.findAllBySite(Site.findById(params.site))
        log.info(p)
        renderJSON(p.collect{e -> [
                id: e.id,
                name: e.name,
                description: e.description

        ]
        })
    }

      def get = {
        log.info(params)
        renderJSON(SensorRadar.get(params.id))
    }

    def preprocessSubmit = {JSONObject submit ->
        if (submit.has('site')) {
            submit.site = Site.get(submit.site)
        }
    }



}

