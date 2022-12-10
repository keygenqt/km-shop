pluginManagement {
    repositories {
        google()
        gradlePluginPortal()
        mavenCentral()
    }
}

dependencyResolutionManagement {
    repositories {
        google()
        mavenCentral()
    }
    versionCatalogs {
        create("kmModule") {
            from(files("dependencies/libs.km.toml"))
        }
        create("cliApp") {
            from(files("dependencies/libs.cli.toml"))
        }
        create("apiApp") {
            from(files("dependencies/libs.api.toml"))
        }
        create("androidApp") {
            from(files("dependencies/libs.android.toml"))
        }
    }
}


rootProject.name = "Shop"

include("shop:mobile:android")
include("shop:server:cli")
include("shop:server:api")
include(":shared")

//val internalLibrariesEnable: String by settings
//
//if (internalLibrariesEnable.toBoolean()) {
//    // git@github.com:keygenqt/compose-routing.git
//    include(":compose-routing")
//    project(":compose-routing").projectDir = File(settingsDir, "../libs/compose-routing")
//}