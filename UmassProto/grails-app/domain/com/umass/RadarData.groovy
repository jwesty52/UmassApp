package com.umass

class RadarData implements JSONFormat{


    /* Front Page */
    Date date
    SensorRadar sensor
    String urls
    String type

    static constraints = {
    }


    Object formatForJSON() {
          return [
                  id: id,
                  date: date,
                  sensor: sensor,
                  urls: urls,
                  type: type

          ]
       }
}
