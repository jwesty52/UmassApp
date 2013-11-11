package com.umass

class SensorRadar {


    /* General Info */

    String instrumentId
    String name
    String location
    String county
    String state
    Double latitude
    Double longitude
    Double heightMSL
    Double heightAboveGround

    Network network

    Integer likeSensorsInNetwork
    Date installationDate
    Date decommissionDate
    Date startDate
    Date endDate
    String dataTransmissionFrequency
    String outputVariable
    String variableUnit
    String dataAccessibility
    String dataLink
    String photoLink


    /* Contact */
    Contact contact
    Organization organization

    /* Description */
    String description
    String manufacturer
    String make
    String model
    String approximateDimensions
    Double approximateWeight
    String radarCategory

    /* Sensor Specifications */
    Double beamWidthAzimuth
    Double beamWidthElevation
    Double rangeGateSpacing
    Double maximumRange

    /* Antenna */
    Double  antennaGain
    Double antennaDiameter
    Double antennaType
    Double minimumAntennaTilt
    Double maximumAntennaTilt
    Integer numberOfPanelsAntenna

    /* Transmitter */
    Double transmitterFrequency
    String transmitterType
    Double transmitterPeakPower
    Double transmitterAveragePower

    /* Radome */
    String radomeDescription

    /*Waveform */
    String waveformType
    String pulseCompression
    Double pulseWidth
    String pulseRepetitionFrequenciesDescription
    String typeOfMultiplePrfUsed
    String staggeredPrt
    String ditheredSampling
    String sz2ProcessingDescription

    /*Polarization */
    String polarization
    String modeOfDualPolarization
    Double transmitterPowerHorizontal
    Double transmitterPowerVertical
    String zdrCalibrationDescription

    /* Calibration and Maintenance */
    String calibrationConstants
    String datesOfCalibration
    String dateOfMaintenance
    String periodOfDowntimeForMaintenance
    String solarCalibrationProcessDescription
    String spectralAnalyzerCalibrationProcessDescription
    String noiseSourceReceiverChainCalibrationInformationDescription
    String reflectivityCalibrationProcessDescription
    String additionalCalibrationTechniquesApplied
    String systemAlarmsDescription
    String qualityControlFlagsListAndDescription

    /* Quality Control */
    String signalProcessingFlowDescription
    String momentEstimationEquationsDescription
    String attenuationCorrectionAlgorithmsDescription
    String clutterRemovalAlgorithmsDescription
    String clutterFilterMapUsed
    String velocityDealiasingAlgorithmsDescription
    Double rangeFoldingThreshold
    Double signalToNoiseRatioThreshold

    /* Sensor Scanning */
    String scanningStrategyDescription
    String scanTypeOptionsAvailable
    Integer numberOfElevationScansWithinVolumeScan
    String elevationScansCompriseVolumeScan
    Double maximumScanRotationSpeed
    Double maximumScanRotationAcceleration
    Double rangeToCenterOfFirstBin






    static mapping = {
        description(type:'text')
        dataAccessibility(type:'text')
        calibrationConstants(type: 'text')
        datesOfCalibration(type: 'text')
        dateOfMaintenance(type: 'text')
        periodOfDowntimeForMaintenance(type: 'text')
        solarCalibrationProcessDescription(type: 'text')
        spectralAnalyzerCalibrationProcessDescription(type: 'text')
        noiseSourceReceiverChainCalibrationInformationDescription(type: 'text')
        reflectivityCalibrationProcessDescription(type: 'text')
        additionalCalibrationTechniquesApplied(type: 'text')
        systemAlarmsDescription(type: 'text')
        qualityControlFlagsListAndDescription(type: 'text')
        signalProcessingFlowDescription(type: 'text')
        momentEstimationEquationsDescription(type: 'text')
        attenuationCorrectionAlgorithmsDescription(type: 'text')
        clutterRemovalAlgorithmsDescription(type: 'text')
        clutterFilterMapUsed(type: 'text')
        velocityDealiasingAlgorithmsDescription(type: 'text')
        scanningStrategyDescription(type: 'text')

    }







    static constraints = {
    }
}
