plugins {
    kotlin("jvm")
    application
    id("io.ktor.plugin") version "2.1.3"
}

group = "com.keygenqt.shop.cli"
version = "0.9.0"

dependencies {
    implementation(project(":shared"))
    // Kotlin CLI
    implementation(cliApp.bundles.cli)
}

application {
    mainClass.set("com.keygenqt.shop.cli.MainKt")
}

ktor {
    fatJar {
        archiveFileName.set("shop-cli.jar")
    }
}