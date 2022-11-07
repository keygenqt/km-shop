import java.util.*

plugins {
    kotlin("multiplatform")
    kotlin("native.cocoapods")
    id("com.android.library")
    id("dev.petuska.npm.publish") version "3.0.3"
}


kotlin {
    android()
    iosX64()
    iosArm64()
    iosSimulatorArm64()

    jvm {
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
//        testRuns["test"].executionTask.configure {
//            useJUnitPlatform()
//        }
    }

    js(IR) {
        moduleName = "shared"
        version = "0.0.1"
        nodejs()
        binaries.library()
    }

    cocoapods {
        summary = "Some description for the Shared Module"
        homepage = "Link to the Shared Module homepage"
        version = "1.0"
        ios.deploymentTarget = "14.1"
        podfile = project.file("../apps/mobile/ios/Podfile")
        framework {
            baseName = "shared"
        }
    }
    
    sourceSets {
        all {
            languageSettings.apply {
                optIn("kotlin.js.ExperimentalJsExport")

            }
        }
        val commonMain by getting
        val androidMain by getting
        val iosX64Main by getting
        val iosArm64Main by getting
        val iosSimulatorArm64Main by getting
        val jvmMain by getting
        val jsMain by getting
        val iosMain by creating {
            dependsOn(commonMain)
            iosX64Main.dependsOn(this)
            iosArm64Main.dependsOn(this)
            iosSimulatorArm64Main.dependsOn(this)
        }
    }
}

android {
    namespace = "com.keygenqt.shop"
    compileSdk = 33
    defaultConfig {
        minSdk = 23
        targetSdk = 33
    }
}

npmPublish {
    packages {
        named("js") {
            packageJson {
                version.set("0.0." + Date().time)
            }
        }
    }
}