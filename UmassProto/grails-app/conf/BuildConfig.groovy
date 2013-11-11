grails.project.class.dir = "target/classes"
grails.project.test.class.dir = "target/test-classes"
grails.project.test.reports.dir = "target/test-reports"
grails.project.war.file = "target/${appName}.war"
grails.project.dependency.resolution = {
    // inherit Grails' default dependencies
    inherits("global") {
        excludes 'xml-apis','xmlParserAPIs','xercesImpl'
    }
    log "warn" // log level of Ivy resolver, either 'error', 'warn', 'info', 'debug' or 'verbose'

    repositories {
        grailsPlugins()
        grailsHome()
        grailsCentral()

        // uncomment the below to enable remote dependency resolution
        // from public Maven repositories
        //mavenLocal()
        mavenCentral()
        //mavenRepo "http://snapshots.repository.codehaus.org"
        //mavenRepo "http://repository.codehaus.org"
        //mavenRepo "http://download.java.net/maven/2/"
        //mavenRepo "http://repository.jboss.com/maven2/"
    }

    plugins {
        runtime (
            ':spring-security-core:1.2.7.3',
            ':jawr:3.3.3',
            ':jasper:1.5.3'
        ) {excludes 'jasperreports'}
    }


    dependencies {
        compile (
            'mysql:mysql-connector-java:5.1.5',
            
            // These should come along with the jasper plugin but we need to specify them manually
            // as we need to take control of which jasper version is downloaded to get v4.1.1.
            // The jasper jar itself is in lib because 4.1.1 isn't in a public maven repo.
            'jasperreports:jasperreports:4.1.1',
           'commons-digester:commons-digester:1.7',
            'com.lowagie:itext:2.1.7',
            'jfree:jfreechart:1.0.12'
        )
    }
    
}
