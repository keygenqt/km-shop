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
}

rootProject.name = "Shop"

include("apps:mobile:android")
include("apps:server:cli")
include("apps:server:api")
include(":shared")