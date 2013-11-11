package com.umass

class Project implements JSONFormat{

    static hasMany = [networks: Network]

    /* Front Page */
    String name
    String website
    String description
    String history
    String partners
    Date updateDate

    Contact contact
    Organization organization

    /* Operations Info */
    String operationDescription
    Date startDate
    Date endDate
    String intensiveOperationPeriods

    /* Testbed Description */

    Integer totalNetworkArealExtent
    String networkMap
    String associatedGeoSocioDataMap
    String projectDescriptionPublication
    String projectResultPublication


    static constraints = {
    }
     static mapping = {
        description(type:'text')
        history(type: 'text')
        intensiveOperationPeriods(type: 'text')
         projectDescriptionPublication(type:'text')
         projectResultPublication(type:'text')

     }


    Object formatForJSON() {
          return [
                  id: id,
                  description:description,
                  name: name,
                  website: website,
                  contact: contact?.firstName + ' ' + contact?.lastName,
                  networks: networks,
                  partners: partners,
                  updateDate: updateDate,
                  organization:  organization == null ? '' : organization.id,
                  operationDescription: operationDescription,
                  startDate: startDate,
                  endDate: endDate,
                  intensiveOperationPeriods: intensiveOperationPeriods,
                  totalNetworkArealExtent: totalNetworkArealExtent,
                  networkMap: networkMap,
                  associatedGeoSocioDataMap: associatedGeoSocioDataMap,
                  projectDescriptionPublication: projectDescriptionPublication,
                  projectResultPublication: projectResultPublication



          ]
       }
}
