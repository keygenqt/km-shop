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

include("apps:mobile:android")
include("apps:server:cli")
include("apps:server:api")
include(":shared")