plugins {
    application
    kotlin("jvm")
    id("io.ktor.plugin") version "2.1.3"
}

group = "com.keygenqt.shop.api"
version = "0.0.1"

application {
    mainClass.set("com.keygenqt.ApplicationKt")
}

dependencies {
    implementation(project(":shared"))
    // Ktor
    implementation(apiApp.bundles.ktor)
}