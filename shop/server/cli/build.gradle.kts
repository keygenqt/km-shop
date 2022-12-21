plugins {
    kotlin("jvm")
    application
    id("io.ktor.plugin") version "2.1.3"
}

group = "com.keygenqt.shop.cli"
version = "0.0.1"

dependencies {
    implementation(project(":shared"))
    // Kotlin CLI
    implementation(cliApp.bundles.cli)
    implementation("com.google.guava:guava:26.0-jre")
}

application {
    mainClass.set("com.keygenqt.shop.cli.MainKt")
}

ktor {
    fatJar {
        archiveFileName.set("shop-cli.jar")
    }
}