plugins {
    kotlin("jvm")
    application
    kotlin("plugin.serialization")
    id("io.ktor.plugin") version "2.1.3"
}

group = "com.keygenqt.shop.pc.client"
version = "0.9.0"

dependencies {
    implementation(project(":shared"))
    implementation(pcApp.bundles.pc)
    implementation("io.ktor:ktor-client-websockets:2.1.3")
}

application {
    mainClass.set("com.keygenqt.shop.pc.client.MainKt")
}

ktor {
    fatJar {
        archiveFileName.set("shop-pc-client.jar")
    }
}