import org.apache.log4j.DailyRollingFileAppender
import org.apache.log4j.PatternLayout

grails.project.groupId = appName // change this to alter the default package name and Maven publishing destination
grails.mime.file.extensions = true // enables the parsing of file extensions from URLs into the request format
grails.mime.use.accept.header = false
grails.mime.types = [ html: ['text/html','application/xhtml+xml'],
                      xml: ['text/xml', 'application/xml'],
                      text: 'text/plain',
                      js: 'text/javascript',
                      rss: 'application/rss+xml',
                      atom: 'application/atom+xml',
                      css: 'text/css',
                      csv: 'text/csv',
                      all: '*/*',
                      json: ['text/json','application/json'],
                      form: 'application/x-www-form-urlencoded',
                      multipartForm: 'multipart/form-data'
                    ]
grails.views.default.codec = "none" // none, html, base64
grails.views.gsp.encoding = "UTF-8"
grails.converters.encoding = "UTF-8"
grails.views.gsp.sitemesh.preprocess = false
grails.scaffolding.templates.domainSuffix = 'Instance'
grails.json.legacy.builder = false
grails.enable.native2ascii = true
grails.logging.jul.usebridge = true
grails.spring.bean.packages = []
grails.exceptionresolver.params.exclude = ['password']

// set per-environment serverURL stem for creating absolute links
environments {
    production {
        grails.serverURL = "http://www.mrmworldwide.com/prose/"
    }
    development {
        grails.serverURL = "http://localhost:8080/${appName}"
    }
    test {
        grails.serverURL = "http://localhost:8080/${appName}"
    }
}

// Log4J configuration
log4j = {
    appenders {
        String logRoot = System.getProperty('catalina.base', '')
        if (logRoot) logRoot += '/logs/'
        logRoot += 'umass-logs/'

        def fullLayout = '%d{HH:mm:ss} | %c{1} | %m%n'
        def byDay = "'.'yyyy-MM-dd"
        def byMonth = "'.'yyyy-MM"

        Closure drf = {name, datePattern, layout ->
            appender new DailyRollingFileAppender(
                    name:name,
                    file:logRoot+name+'.log',
                    datePattern:datePattern,
                    layout:new PatternLayout(layout))
        }

        drf('umassProto', byDay, fullLayout)
        // drf('aMonthlyLog', byMonth, '%d{MM/dd/yy HH:mm} | %m%n')

        // stacktrace.log  -- for stacktrace: not additive, minimal backup
        rollingFile name: 'stacktrace', file: logRoot + 'stacktrace.log', layout: new PatternLayout(fullLayout)

        // console
        console name: 'stdout', layout: new PatternLayout(fullLayout)
    }

    // wireup root logging with appropriate warning levels
    root {warn('stdout', 'umass')}
    info 'com.umass', 'grails.app'
    error 'org.springframework', 'org.hibernate', 'net.sf.ehcache', 'org.codehaus.groovy.grails.scaffolding'
    warn   'org.mortbay.log'

    // wireup specialized logging
    // info aMonthlyLog:   'grails.app.service.com.mrmworldwide.ServiceToLogToMontlyLog'
    error stacktrace:   'StackTrace'
}

// JAWR Configuration for JS and CSS bundling
jawr {
	gzip.on = true
	js {
		mapping = '/bundles-js/'
		bundle {
			names = 'app'
			app {
				id = '/bun/app.js'
				mappings = '/js/lib/extjs/ext-all.js, /js/lib/extjs/ux/**, /js/proto/**'
                // Use the mappings below instead if you want to use ExtJS debug.
//				mappings = '/js/lib/extjs/ext-all-debug-w-comments.js, /js/lib/extjs/ux/**, /js/prose/**'
			}
		}
	}

	css {
		mapping = '/bundles-css/'
		bundle {
			names = 'app'
			app {
				id = '/bun/app.css'
				mappings = '/js/resources/css/umassProto.css, /js/lib/extjs/ux/css/**, /css/**'
			}
		}
	}
}

environments {
  development {
    jawr.debug.on = true
  }
}

fileuploader {
	avatar {
		maxSize = 1024 * 256 //256 kbytes
		allowedExtensions = ["jpg","jpeg","gif","png"]
		path = "/tmp/avatar/"
	}
	docs {
		maxSize = 1000 * 1024 * 4 //4 mbytes
		allowedExtensions = ["doc", "docx", "pdf", "rtf"]
		path = "/tmp/docs/"
	}
}


// Spring Security Configuration - custom class and property mappings.
grails.plugins.springsecurity.userLookup.userDomainClassName = 'com.umass.Employee'
grails.plugins.springsecurity.userLookup.authorityJoinClassName = 'com.umass.EmployeeRole'
grails.plugins.springsecurity.authority.className = 'com.umass.Role'
grails.plugins.springsecurity.userLookup.usernamePropertyName = 'email'
grails.plugins.springsecurity.rememberMe.cookieName = 'umass_login'
grails.plugins.springsecurity.rememberMe.key = 'um4ssCookieK3y!'

// Admin role inherits all rights of User role
grails.plugins.springsecurity.roleHierarchy = '''
    ROLE_ADMIN > ROLE_USER
'''

// Except for static resources and login/logout pages, which remain unsecured
grails.plugins.springsecurity.interceptUrlMap = [
   "${appName}/js/**":        ['IS_AUTHENTICATED_ANONYMOUSLY'],
   "${appName}/css/**":       ['IS_AUTHENTICATED_ANONYMOUSLY'],
   "${appName}/images/**":    ['IS_AUTHENTICATED_ANONYMOUSLY'],
   "${appName}/login/**":     ['IS_AUTHENTICATED_ANONYMOUSLY'],
   "${appName}/logout/**":    ['IS_AUTHENTICATED_ANONYMOUSLY']
]
