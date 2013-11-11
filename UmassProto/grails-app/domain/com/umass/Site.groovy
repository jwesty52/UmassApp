package com.umass

import org.apache.tools.ant.types.resources.comparators.Content

class Site implements JSONFormat{


    /* General Info */
    String siteId
    String name
    String status
    String alias
    String type
    String county
    String state
    Double latitude
    Double longitude
    Double elevation
    String address
    String directions
    String accessLimitations

    /* Responsibility */

    Organization organization
    Contact contact
    Network network

    /* Description */
    Date startDate
    Date endDate
    String listOfInstruments
    String typeOfPowerSupply
    String typeOfCommunication
    String potentialObstructions
    String landCoverDescription
    String waterBodiesNearby
    String terrainFeaturesNearby

    /* Classification */

    String drc
    String lcz
    String ucz
    String utz

    /* Site Maps and Photos */

    String sitePhotoLink
    String cardinalPhotoLink
    String panoramicPhotoLink
    String fisheyePhotoLink
    String localMapsLink
    String aerialPhotoLink
    String sketchMapLink
    String satelliteImageryLink
    String horizonMapLink

    /* Site Quality Control */

    String stationHistory
    String qcVisits
    String maintenanceLog


    static mapping = {
        directions(type:'text')
        accessLimitations(type:'text')
        listOfInstruments(type: 'text')
        typeOfPowerSupply(type: 'text')
        typeOfCommunication(type: 'text')
        potentialObstructions(type: 'text')
        landCoverDescription(type: 'text')
        waterBodiesNearby(type: 'text')
        terrainFeaturesNearby(type: 'text')
        stationHistory(type: 'text')
        qcVisits(type: 'text')
        maintenanceLog(type: 'text')
    }




    static constraints = {
    }

    Object formatForJSON() {
        return [
                id: id,
                name: name,
                siteId: siteId,
                status: status,
                alias: alias,
                type: type,
                county: county,
                state: state,
                latitude: latitude,
                longitude: longitude,
                elevation: elevation,
                address: address,
                directions: directions,
                accessLimitations: accessLimitations,
                contact: contact?.firstName + ' ' + contact?.lastName,

                  organization:  organization == null ? '' : organization.id,
                network: network == null? '' : network.id,
                startDate: startDate,
                endDate: endDate,
                listOfInstruments: listOfInstruments,
                typeOfPowerSupply: typeOfPowerSupply,
                typeOfCommunication: typeOfCommunication,
                potentialObstructions: potentialObstructions,
                landCoverDescription: landCoverDescription,
                waterBodiesNearby: waterBodiesNearby,
                terrainFeaturesNearby: terrainFeaturesNearby,
                drc: drc,
                ucz: ucz,
                utz: utz,
                lcz: lcz,
                sitePhotoLink: sitePhotoLink,
                cardinalPhotoLink: cardinalPhotoLink,
                panoramicPhotoLink: panoramicPhotoLink,
                fisheyePhotoLink: fisheyePhotoLink,
                localMapsLink: localMapsLink,
                aerialPhotoLink: aerialPhotoLink,
                sketchMapLink: sketchMapLink,
                satelliteImageryLink: satelliteImageryLink,
                horizonMapLink: horizonMapLink,
                stationHistory: stationHistory,
                qcVisits: qcVisits,
                maintenanceLog: maintenanceLog



        ]


    }
}
