def dbHost = 'localhost'
//def dbHost = 'dbserver.mrmworldwide.com'

dataSource {
    pooled = true
    driverClassName = "com.mysql.jdbc.Driver"
//    username = "root"
//    password = "radar2" + '$'
    username = 'prose'
    password = 'prosepass'
}

hibernate {
    cache.use_second_level_cache = true
    cache.use_query_cache = true
    cache.provider_class = 'net.sf.ehcache.hibernate.EhCacheProvider'
}

// environment specific settings
environments {
    development {
        dataSource {
            dbCreate = "update" // one of 'create', 'create-drop','update'
            url = "jdbc:mysql://${dbHost}:3306/umass-dev" //?autoReconnect=true
          }
    }
    test {
        dataSource {
            dbCreate = "update"
            url = "jdbc:mysql://${dbHost}:3306/casadfw"
        }
    }
    production {
        dataSource {
            dbCreate = "update"
            url = "jdbc:mysql://${dbHost}:3306/casadfw"
        }
    }
}
