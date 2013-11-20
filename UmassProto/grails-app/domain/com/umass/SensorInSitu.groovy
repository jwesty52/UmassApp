package com.umass

class SensorInSitu {

    /* General Info */

    String instrumentId
    String name
//    String location
//    String county
//    String state
//    Double latitude
//    Double longitude
//    Double heightMSL
    String heightAboveGround

    Network network

    Integer likeSensorsInNetwork
//    Date installationDate
//    Date decommissionDate
//    Date startDate
//    Date endDate
//    String dataTransmissionFrequency
    String outputVariable
    String variableUnit
    String dataAccessibility
    String dataLink
    String photoLink


    /* Contact */
    Organization organization
//    Contact contact

    /* Description */
    String description
    String manufacturer
    String make
    String model
    String operatingPrinciples
    String equations
    String maximumOperatingRange
    String minimumOperatingRange
    String accuracy
    String resolution
    String samplingFrequency
    String averagingPeriod
                                                                                                            \
    /* Calibration and Maintenance */
//    String calibrationConstants
//    String datesOfCalibration
//    String methodOfCalibration
//    String dateOfMaintenance
//    String periodOfDowntimeForMaintenance
//    Date lastSensorReplacement


    /* Quality Control */
    String descriptionQCQA
    String knownBiasesOrLimitations
    String qualityControlFlags



    static mapping = {
        description(type:'text')
        dataAccessibility(type:'text')
        operatingPrinciples(type: 'text')
        equations(type: 'text')
//        calibrationConstants(type: 'text')
//        datesOfCalibration(type: 'text')
//        methodOfCalibration(type: 'text')
//        dateOfMaintenance(type: 'text')
//        periodOfDowntimeForMaintenance(type: 'text')
        descriptionQCQA(type: 'text')
        knownBiasesOrLimitations(type: 'text')
        qualityControlFlags(type: 'text')
    }







    static constraints = {
    }
}
