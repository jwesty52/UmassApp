package com.umass.rest

import com.umass.base.RestController
import com.umass.Project

class ProjectController extends RestController {

    // TODO - no need to extend RestController since we're overriding everything -
    // extend BaseController instead and implement read(), migrate client calls to get() to read()

    def restTarget = com.umass.Project


    def create = {

        def p = new Project(

                name: params.name
                )


        p.save(flush:true)


        def success = p.errors.errorCount == 0
        def message = success ?
            "Created new Project with ID ${p.id}." :
            "Failed to create Project."
        log.info(message)

        def ret = [
                success: success,
                data: p,
                message: message
        ]
        if (!success) ret.errors = allErrors(p)
        renderJSON(ret)

    }

    def get = {
        log.info(params)
        renderJSON(Project.get(params.id))
    }

    def list = {
        def p = Project.list()
        renderJSON(p.collect{e -> [
           id: e.id,
           name: e.name,

           ]
        })
    }


}