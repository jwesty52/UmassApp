package com.umass

class Contact implements JSONFormat{

    String firstName
    String lastName
    String title
    String email
    String phoneNumber
    String addressLine1
    String addressLine2
    String city
    String state
    Integer zip

    Organization organization

    static constraints = {
    }


//    String getFullName() {
//        return firstName + ' ' + lastName
//    }


    Object formatForJSON() {
        return [
                id: id,
                email: email,
                firstName: firstName,
                lastName: lastName,
                title: title,
                phoneNumber: phoneNumber,
                addressLine1: addressLine1,
                addressLine2: addressLine2,
                city: city,
                state: state,
                zip: zip

        ]
    }
}
