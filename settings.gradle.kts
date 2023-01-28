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
        create("pcApp") {
            from(files("dependencies/libs.pc.toml"))
        }
    }
}


rootProject.name = "Shop"

include("shop:mobile:android")
include("shop:server:cli")
include("shop:server:api")
include("shop:pc:client")
include(":shared")