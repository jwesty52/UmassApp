package com.umass.security

import grails.converters.JSON
import javax.servlet.http.HttpServletResponse

class LoginController {

	def authenticationTrustResolver
	def springSecurityService

	/**
	 * Default action; redirects to 'defaultTargetUrl' if logged in, /login/auth otherwise.
	 */
	def index = {

		if (springSecurityService.isLoggedIn()) {
			redirect uri: org.codehaus.groovy.grails.plugins.springsecurity.SpringSecurityUtils.securityConfig.successHandler.defaultTargetUrl
		}
		else {
			redirect action: auth, params: params
		}
	}

	/**
	 * Show the login page.
	 */
	def auth = {

		def config = org.codehaus.groovy.grails.plugins.springsecurity.SpringSecurityUtils.securityConfig

		if (springSecurityService.isLoggedIn()) {
			redirect uri: config.successHandler.defaultTargetUrl
			return
		}

		String view = 'auth'
		String postUrl = "${request.contextPath}${config.apf.filterProcessesUrl}"
		render view: view, model: [postUrl: postUrl,]
	}

	/**
	 * The redirect action for Ajax requests. 
	 */
	def authAjax = {

		response.setHeader 'Location', org.codehaus.groovy.grails.plugins.springsecurity.SpringSecurityUtils.securityConfig.auth.ajaxLoginFormUrl
		response.sendError HttpServletResponse.SC_UNAUTHORIZED
	}

	/**
	 * Show denied page.
	 */
	def denied = {
		if (springSecurityService.isLoggedIn() &&
				authenticationTrustResolver.isRememberMe(org.springframework.security.core.context.SecurityContextHolder.context?.authentication)) {
			// have cookie but the page is guarded with IS_AUTHENTICATED_FULLY
			redirect action: full, params: params
		}
	}

	/**
	 * Login page for users with a remember-me cookie but accessing a IS_AUTHENTICATED_FULLY page.
	 */
	def full = {
		def config = org.codehaus.groovy.grails.plugins.springsecurity.SpringSecurityUtils.securityConfig
		render view: 'auth', params: params,
			model: [hasCookie: authenticationTrustResolver.isRememberMe(org.springframework.security.core.context.SecurityContextHolder.context?.authentication),
			        postUrl: "${request.contextPath}${config.apf.filterProcessesUrl}"]
	}

	/**
	 * Callback after a failed login. Redirects to the auth page with a warning message.
	 */
	def authfail = {

		def username = session[org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter.SPRING_SECURITY_LAST_USERNAME_KEY]
		String msg = ''
		def exception = session[org.springframework.security.web.WebAttributes.AUTHENTICATION_EXCEPTION]
		if (exception) {
			if (exception instanceof org.springframework.security.authentication.AccountExpiredException) {
				msg = org.codehaus.groovy.grails.plugins.springsecurity.SpringSecurityUtils.securityConfig.errors.login.expired
			}
			else if (exception instanceof org.springframework.security.authentication.CredentialsExpiredException) {
				msg = org.codehaus.groovy.grails.plugins.springsecurity.SpringSecurityUtils.securityConfig.errors.login.passwordExpired
			}
			else if (exception instanceof org.springframework.security.authentication.DisabledException) {
				msg = org.codehaus.groovy.grails.plugins.springsecurity.SpringSecurityUtils.securityConfig.errors.login.disabled
			}
			else if (exception instanceof org.springframework.security.authentication.LockedException) {
				msg = org.codehaus.groovy.grails.plugins.springsecurity.SpringSecurityUtils.securityConfig.errors.login.locked
			}
			else {
				msg = org.codehaus.groovy.grails.plugins.springsecurity.SpringSecurityUtils.securityConfig.errors.login.fail
			}
            log.info(msg)
		}


        //sanitize input
        def fixedname = fix(username)



		if (springSecurityService.isAjax(request)) {
			render([error: msg] as JSON)
		}
		else {
			flash.message = msg
			redirect action: auth, params: params
		}
	}

    // !  #  $  %  &  '  *  +  -  .  /  =  ?  @  ^  _  `   {   |  }  ~
    // 33 35 36 37 38 39 42 43 45 46 47 61 63 64 94 95 96 123 124 125 126
    def fix = {u ->
        while(u.contains("&#")) {
            def i = u.indexOf("&#")
            def ascii = u.substring(i+2,i+5)
            def rep = ""
            switch(ascii) {
                case "33;": rep = "!";break;
                case "35;": rep = "#";break;
                case "36;": rep = "\$";break;
                case "37;": rep = "%";break;
                case "38;": rep = "&";break;
                case "39;": rep = "'";break;
                case "42;": rep = "*";break;
                case "43;": rep = "+";break;
                case "45;": rep = "-";break;
                case "46;": rep = ".";break;
                case "47;": rep = "/";break;
                case "61;": rep = "=";break;
                case "63;": rep = "?";break;
                case "64;": rep = "@";break;
                case "94;": rep = "^";break;
                case "95;": rep = "_";break;
                case "96;": rep = "`";break;
                case "123": rep = "{";break;
                case "124": rep = "|";break;
                case "125": rep = "}";break;
                case "126": rep = "~";break;
            }
            def j = ascii.contains(";") ? 5 : 6
            u = u.substring(0,i)+rep+u.substring(i+j)
        }
        return u
    }

	/**
	 * The Ajax success redirect url.
	 */
	def ajaxSuccess = {
        log.info("SUCESSsdfgdf")

		render([success: true, username: springSecurityService.authentication.name] as JSON)
	}

	/**
	 * The Ajax denied redirect url.
	 */
	def ajaxDenied = {
		render([error: 'access denied'] as JSON)
	}
}
