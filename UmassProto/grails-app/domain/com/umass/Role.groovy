package com.umass

class Role implements JSONFormat{


	String authority
    String description

	static mapping = {
		cache true
	}

	static constraints = {
		authority blank: false, unique: true
	}

    Object formatForJSON() {
          return [
                  id: id,
                  description:description,
                  authority: authority

          ]
       }

}
