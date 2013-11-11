package com.umass.base

import com.umass.JSON
import com.umass.Employee
//import grails.converters.JSON

/**
 * Base controller for shared functionality across all application endpoints.
 */
abstract class BaseController {

    def messageSource

    /**
     * Return the Employee record for the currently logged-in user.
     */
    protected com.umass.Employee getAppUser() {
       return Employee.findByEmail(principal?.username)
    }

    /**
     * Render any Object out to the browser, using the object's JSONFormat if available.
     */
    protected void renderJSON(Object o) {
        render (new com.umass.JSON(o))
    }




    /**
     * Helper method for GORM - will be moved into a com.umass.base service class, as that's more appropriate.
     */
    protected List allErrors(gormObject) {
        return gormObject.errors.allErrors.collect{error ->
            messageSource.getMessage(error, Locale.US)
        }
    }
    
}
