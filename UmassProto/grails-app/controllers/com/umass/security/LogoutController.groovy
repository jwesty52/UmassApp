package com.umass.security

class LogoutController {

	/**
	 * Index action. Redirects to the Spring com.umass.security logout uri.
	 */
	def index = {
		redirect uri: org.codehaus.groovy.grails.plugins.springsecurity.SpringSecurityUtils.securityConfig.logout.filterProcessesUrl // '/j_spring_security_logout'
	}
}
