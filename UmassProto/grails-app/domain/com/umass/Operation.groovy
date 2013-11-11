package com.umass

class Operation implements JSONFormat{


    Date startDate
    Date endDate

    // Employee personal information

    String intensiveOperationsPeriod
    String description



    Object formatForJSON() {
        return [
                id: id,
                description:description,
                startDate: startDate,
                endDate: endDate,
                intensiveOperationsPeriod: intensiveOperationsPeriod

        ]
    }
}