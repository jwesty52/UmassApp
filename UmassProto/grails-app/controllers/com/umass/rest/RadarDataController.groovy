package com.umass.rest

import com.umass.base.RestController

import com.umass.RadarData
import com.umass.JSON

class RadarDataController extends RestController {

    def restTarget = com.umass.RadarData

    def radarDataService

    def springSecurityService

    def read = {

        log.info(params)
        if(params.s1 == null){
            render ('') as com.umass.JSON
        }

        else{
            def w
            if(params.s1[1] == 'BETWEEN')
                w = " where " + params.s1[0] + " " + params.s1[1] + " '" + params.s1[2] + "' AND '" + params.s1[3] + "'"
            else {
                w = " where " + params.s1[0] + " " + params.s1[1] + " '" + params.s1[2] + "'"
            }
//        if(params.s2 != 'blank') {
            //            w = w  + radarDataService.queryBuild(params.s2)
            //        }
            //        if(params.s3 != 'blank') {
            //            w = w + radarDataService.queryBuild(params.s3)
            //        }
            //        if(params.s4 != 'blank') {
            //            w = w + radarDataService.queryBuild(params.s4)
            //        }
            //        if(params.s5 != 'blank') {
            //            w = w + radarDataService.queryBuild(params.s5)
            //        }

            //        def employee = springSecurityService.getCurrentUser()
            //        def r = EmployeeRole.findByEmployee(employee)
            //        if(r.role.authority == "ROLE_FIRMADMIN" || r.role.authority == 'ROLE_MULTIADMIN' || r.role.authority == 'ROLE_SUPERUSER'){
            //            w = w + ' AND firm_id = ' + employee.firm.id
            //        }
            //        else{
            //             w = w + ' AND firm_id = ' + employee.firm.id
            //            def repQ= " AND ( 0=1"
            //            def relation = Relationship.findAllByBelongsEmployee(employee)
            //
            //            def repNums = employee.empRepNums.collect {it.repNumber.id}
            //            def repNum = RepNumber.findAllByIdInList(repNums)
            //            def collectRep = repNum.collect {it}
            ////            log.info(relation)
            ////            log.info(repNums)
            //            for(int i=0; i<relation.size(); i++){
            ////                log.info('inrealtion')
            //                def emp = (relation[i].employee)
            ////                log.info(emp)
            //                def empRel = emp.empRepNums.collect {it.repNumber.id}
            ////                log.info(empRel)
            //                def repEmp = RepNumber.findAllByIdInList(empRel)
            ////                log.info(repEmp)
            //                for(int j =0; j<repEmp.size(); j++){
            //                    collectRep.add(repEmp[j])
            //                }
            //    //            def empCollect = repEmp.collect {it.repNumber}
            //    //            collectRep.add(empCollect)
            //            }
            //
            //            collectRep.each {rec ->
            ////                log.info(rec)
            //                repQ = repQ + " OR rep_id = " +rec.id
            //            }
            //
            //            repQ = repQ + ")"
            ////            log.info(repQ)
            //            w = w + repQ
            //        }

            log.info("Search Query: " + w)
            def a = RadarData.findAll("from RadarData" + w, [max:params.limit.toInteger(), offset: params.start.toInteger()])
            def count = RadarData.executeQuery('select COUNT(id) from RadarData' + w)

//        def r = Trade.executeQuery("select id, account, repCd, headerDate, settlementDate, tradeDate, bs, quantity, symbol, cusip from Trade" + w, [max:5, offset:0])
            //
            //        def b
            //        log.info(a.size())
            //
            //        if(a.size()> params.start.toInteger()+params.limit.toInteger()){
            //             b = a.subList( params.start.toInteger(), (params.start.toInteger()+params.limit.toInteger()))
            //        }
            //        else{
            //            b = a.subList( params.start.toInteger(), a.size())
            //        }
            //        log.info(b)



            //        render ([count:a.size(), data: a] as JSON)
            //
            //         def c = b.collect {e -> [
            //            id: e.id,
            //                account: e.account,
            //    //            clearingCode: e.clearingCode,
            //    //            firmCode: e.firmCode,
            //                xcxl: e.xcxl,
            //                bs: e.bs,
            //                repCd: e.repCd,
            //                headerDate: e.headerDate,
            //                tradeDate: e.tradeDate,
            //                settlementDate: e.settlementDate,
            //                quantity: e.quantity,
            //                symbol: e.symbol,
            //                cusip: e.cusip,
            //                securityDescriptionLine1: e.securityDescriptionLine1,
            //                securityDescriptionLine2: e.securityDescriptionLine2,
            //                securityDescriptionLine3: e.securityDescriptionLine3,
            //                price: e.price,
            //                commission: e.commission,
            //                principal: e.principal,
            //                offsetAccount: e.offsetEntity,
            //
            //           ]
            //         }
            log.info(a)
            renderJSON(a.collect{e -> [
                    id: e.id,
                    type: e.type,
                    date: e.date,
                    sensor: e.sensor.name,
                    url: e.url

            ]
            })


        }

    }
}
