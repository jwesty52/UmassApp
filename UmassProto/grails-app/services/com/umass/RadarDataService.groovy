package com.umass

class RadarDataService {


    static transactional = true

    def queryBuild(Object s) {
        if(s[1] == 'BETWEEN'){
            return " AND " + s[0] + " " + s[1] + " '" + s[2] + "' AND '" + s[3] + "'"
        }
        else{
            return " AND " + s[0] + " " + s[1] + " '" + s[2] + "'"
        }

    }
}