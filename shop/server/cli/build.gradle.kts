import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("jvm")
    application
}

group = "com.keygenqt.shop.cli"
version = "0.0.1"

dependencies {
    implementation(project(":shared"))
    // Kotlin CLI
    implementation(cliApp.bundles.cli)
}

tasks.withType<KotlinCompile> {
    kotlinOptions.jvmTarget = "1.8"
}

application {
    mainClass.set("com.keygenqt.shop.cli.MainKt")
}