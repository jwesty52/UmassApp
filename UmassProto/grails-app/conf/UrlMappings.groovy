import org.codehaus.groovy.grails.commons.ApplicationHolder

class UrlMappings {

	static mappings = {

        // Default controller-based endpoint mapping
		"/$controller/$action?/$id?"{}

        // Main Javascript GUI
        "/"(controller:'default')

        // Error page
		"500"(view:'/error')

        // Automap RESTful paths to controllers
        "/com.umass.rest/$controller/$id?"{
            action = [POST:'create', GET:'read', PUT:'update', DELETE:'delete']
        }

	}
}
