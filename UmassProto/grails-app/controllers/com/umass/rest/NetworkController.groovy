package com.umass.rest

import com.umass.base.RestController
import com.umass.Network
import org.codehaus.groovy.grails.web.json.JSONObject
import com.umass.Project

class NetworkController extends RestController {

    def restTarget = com.umass.Network

    def list = {
        def p = Network.list()
        renderJSON(p.collect{e -> [
                id: e.id,
                name: e.name,

        ]
        })
    }

    def listByProject = {
        log.info('here')
        def p = Network.findAllByProject(Project.findById(params.project))
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
        renderJSON(Network.get(params.id))
    }

    def preprocessSubmit = {JSONObject submit ->
        if (submit.has('project')) {
            submit.project = Project.get(submit.project)
        }
    }



}

