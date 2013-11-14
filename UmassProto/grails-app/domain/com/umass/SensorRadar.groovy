package com.umass

class SensorRadar implements JSONFormat{

    static belongsTo = [site: Site]


    /* General Info */

    String instrumentId
    String name
    String location
    Double heightMSL
    Double heightAboveGround

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

    Object formatForJSON() {
        return [
                id:id,
                instrumentId: instrumentId,
                name: name,
                location: location,
                heightMSL:heightMSL,
                heightAboveGround: heightAboveGround,

                likeSensorsInNetwork: likeSensorsInNetwork,
                installationDate: installationDate,
                decommissionDate:decommissionDate,
                startDate:startDate,
                endDate:endDate ,
                dataTransmissionFrequency: dataTransmissionFrequency,
                outputVariable:outputVariable,
                variableUnit:variableUnit,
                dataAccessibility:dataAccessibility,
                dataLink:dataLink,
                photoLink:photoLink,


                /* Contact */
                contact:contact,
                organization :organization,

                /* Description */
                description:description,
                manufacturer:manufacturer,
                make:make,
                model:model,
                approximateDimensions:approximateDimensions,
                approximateWeight:approximateWeight,
                radarCategory:radarCategory,

                /* Sensor Specifications */
                beamWidthAzimuth:beamWidthAzimuth,
                beamWidthElevation:beamWidthElevation,
                rangeGateSpacing:rangeGateSpacing,
                maximumRange:maximumRange,

                /* Antenna */
                antennaGain :antennaGain,
                antennaDiameter:antennaDiameter,
                antennaType:antennaType,
                minimumAntennaTilt:minimumAntennaTilt,
                maximumAntennaTilt:maximumAntennaTilt,
                numberOfPanelsAntenna:numberOfPanelsAntenna,

                /* Transmitter */
                transmitterFrequency: transmitterFrequency,
                transmitterType:transmitterType,
                transmitterPeakPower:transmitterPeakPower,
                transmitterAveragePower:transmitterAveragePower,

                /* Radome */
                radomeDescription:radomeDescription,

                /*Waveform */
                waveformType:waveformType,
                pulseCompression:pulseCompression,
                pulseWidth:pulseWidth,
                pulseRepetitionFrequenciesDescription: pulseRepetitionFrequenciesDescription,
                typeOfMultiplePrfUsed:typeOfMultiplePrfUsed,
                staggeredPrt:staggeredPrt,
                ditheredSampling:ditheredSampling,
                sz2ProcessingDescription:sz2ProcessingDescription,

                /*Polarization */
                polarization: polarization,
                modeOfDualPolarization:modeOfDualPolarization,
                transmitterPowerHorizontal:transmitterPowerHorizontal,
                transmitterPowerVertical:transmitterPowerVertical,
                zdrCalibrationDescription:zdrCalibrationDescription,

                /* Calibration and Maintenance */
                calibrationConstants: calibrationConstants,
                datesOfCalibration:datesOfCalibration,
                dateOfMaintenance:dateOfMaintenance,
                periodOfDowntimeForMaintenance:periodOfDowntimeForMaintenance,
                solarCalibrationProcessDescription:solarCalibrationProcessDescription,
                spectralAnalyzerCalibrationProcessDescription:spectralAnalyzerCalibrationProcessDescription,
                noiseSourceReceiverChainCalibrationInformationDescription:noiseSourceReceiverChainCalibrationInformationDescription,
                reflectivityCalibrationProcessDescription:reflectivityCalibrationProcessDescription,
                additionalCalibrationTechniquesApplied:additionalCalibrationTechniquesApplied,
                systemAlarmsDescription:systemAlarmsDescription,
                qualityControlFlagsListAndDescription:qualityControlFlagsListAndDescription,

                /* Quality Control */
                signalProcessingFlowDescription:signalProcessingFlowDescription,
                momentEstimationEquationsDescription:momentEstimationEquationsDescription,
                attenuationCorrectionAlgorithmsDescription:attenuationCorrectionAlgorithmsDescription,
                clutterRemovalAlgorithmsDescription:clutterRemovalAlgorithmsDescription,
                clutterFilterMapUsed:clutterFilterMapUsed,
                velocityDealiasingAlgorithmsDescription:velocityDealiasingAlgorithmsDescription,
                rangeFoldingThreshold:rangeFoldingThreshold,
                signalToNoiseRatioThreshold:signalToNoiseRatioThreshold,

                /* Sensor Scanning */
                scanningStrategyDescription:scanningStrategyDescription,
                scanTypeOptionsAvailable:scanTypeOptionsAvailable,
                numberOfElevationScansWithinVolumeScan:numberOfElevationScansWithinVolumeScan,
                elevationScansCompriseVolumeScan:elevationScansCompriseVolumeScan,
                maximumScanRotationSpeed:maximumScanRotationSpeed,
                maximumScanRotationAcceleration:maximumScanRotationAcceleration,
                rangeToCenterOfFirstBin:rangeToCenterOfFirstBin
        ]
    }
}
