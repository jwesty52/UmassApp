package com.umass



class Employee implements JSONFormat{

//    static belongsTo = [agency:Agency]

	// Spring Security properties
    String email
	String password
	boolean enabled
	boolean accountExpired
	boolean accountLocked
	boolean passwordExpired

    // Standard Employee fields
    String firstName
    String lastName

	static constraints = {
		email(blank:false, unique:true)
		firstName(blank:false)
		lastName(blank:false)
		password(blank:false)
	}

	static mapping = {
		password column: '`password`'
	}

    static transients = ['fullName']

    String getFullName() {
        return firstName + ' ' + lastName
    }

	Set<Role> getAuthorities() {
		EmployeeRole.findAllByEmployee(this).collect { it.role } as Set
	}

    Object formatForJSON() {
        return [
            id: id,
            email: email,
            firstName: firstName,
            lastName: lastName,
            enabled: enabled,
            agency: agency
        ]
    }
}
