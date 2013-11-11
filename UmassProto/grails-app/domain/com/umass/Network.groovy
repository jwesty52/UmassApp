package com.umass

class Network implements JSONFormat{

    static hasMany = [sites: Site]

    static belongsTo = [project: Project]

    /* General Info */
    String name
    String website
    String type
    String description
    String partners
    String variables
    String history

    /* Contact */
    Contact contact

    /* Description */
    Integer arealExtent
//    Integer numberOfSites
    //    String siteNames
    Double spatialDensity
    String maps
    String associatedGeoMap
    String networkDescriptionPublicationLinks
    String networkResultsLinks

//    /* Operations Info */

    String operationType
    String operationMode
    String operationDescription
    Date operationStartDate
    Date operationEndDate
    String offlinePeriods

    /* Communications */

    String topology
    String modeOfTransmission
    Integer bandwithRequirementsPerSite
    Integer estimatedLatency
    String dataCollectionPoint

    /* Data Information */

    String dataFormat
    String timeFormat
    String dataAccessRights
    String accessInformation
    String archiveDataCenter
    String websiteForDataAccess

    /* Quality Control */

    String processingSteps
    String formulaeForCalculations
    String qualityControlFlags
    String qualityControlAlgorithms
    String filteringTechniquesUsed
    String dataReductionMethods
    String potentialOrKnownBiasesAndErrors
    String publicationQualityControlLinks
    Date lastUpdateDate



    //TODO Site names

    //TODO network Maps geo/socio, publications

    //TODO operations

    static constraints = {
    }

    static mapping = {
        description(type:'text')
        history(type: 'text')
        map(type: 'text')
        associatedGeoMap(type:'text')
        networkDescriptionPublicationLinks(type:'text')
        networkResultsLinks(type: 'text')
        topology(type: 'text')
        dataAccessRights(type: 'text')
        accessInformation(type: 'text')
        processingSteps(type: 'text')
        formulaeForCalculations(type: 'text')
        qualityControlFlags(type:'text')
        qualityControlAlgorithms(type:'text')
        filteringTechniquesUsed(type:'text')
        dataReductionMethods(type:'text')
        potentialOrKnownBiasesAndErrors(type:'text')
        publicationQualityControlLinks(type:'text')
    }



    Object formatForJSON() {
        return [
                id: id,
                description:description,
                name: name,
                website: website,
                contact: contact?.firstName + ' ' + contact?.lastName,
                type: type,


                partners: partners,
                variables: variables,
                history: history,
                arealExtent: arealExtent,
                spatialDensity: spatialDensity,
                maps: maps,
                associatedGeoMap : associatedGeoMap,
                networkDescriptionPublicationLinks : networkDescriptionPublicationLinks,
                networkResultsLinks: networkResultsLinks,
                operationType : operationType,
                operationMode : operationMode,
                operationDescription: operationDescription,
                operationStartDate : operationStartDate,
                operationEndDate : operationEndDate,
                offlinePeriods : offlinePeriods,
                topology : topology,
                modeOfTransmission  : modeOfTransmission,
                bandwithRequirementsPerSite  :bandwithRequirementsPerSite,
                estimatedLatency: estimatedLatency,
                dataCollectionPoint: dataCollectionPoint,
                dataFormat: dataFormat,
                timeFormat: timeFormat,
                dataAccessRights:dataAccessRights,
                accessInformation:accessInformation,
                archiveDataCenter:archiveDataCenter,
                websiteForDataAccess:websiteForDataAccess,
                processingSteps : processingSteps,
                formulaeForCalculations:formulaeForCalculations,
                qualityControlFlags:qualityControlFlags,
                qualityControlAlgorithms: qualityControlAlgorithms,
                filteringTechniquesUsed: filteringTechniquesUsed,
                dataReductionMethods:dataReductionMethods,
                potentialOrKnownBiasesAndErrors:potentialOrKnownBiasesAndErrors,
                publicationQualityControlLinks:publicationQualityControlLinks,
                lastUpdateDate:lastUpdateDate


        ]
    }
}