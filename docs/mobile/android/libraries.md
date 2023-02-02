Libraries
===

#### Ktor

Ktor is an asynchronous framework for creating microservices, web applications and more.

```toml title="Version Catalogs"
[libraries.ktor-client-logging]
module = "io.ktor:ktor-client-logging"
[libraries.ktor-client-logging.version]
ref = "ktorVersion"
```

#### Coil

An image loading library for Android backed by Kotlin Coroutines.

```toml title="Version Catalogs"
[libraries.coil-compose]
module = "io.coil-kt:coil-compose"
[libraries.coil-compose.version]
ref = "coilVersion"

[libraries.coil-svg]
module = "io.coil-kt:coil-svg"
[libraries.coil-svg.version]
ref = "coilVersion"
```

#### Lottie

This repo is the home of the unified Lottie docs hosted at http://airbnb.io/lottie.

```toml title="Version Catalogs"
[libraries.lottie-compose]
module = "com.airbnb.android:lottie-compose"
[libraries.lottie-compose.version]
ref = "lottieVersion"
```

#### Accompanist

Accompanist is a group of libraries that aim to supplement Jetpack Compose with features that are commonly required by developers but not yet available.

```toml title="Version Catalogs"
[libraries.accompanist-pager]
module = "com.google.accompanist:accompanist-pager"
[libraries.accompanist-pager.version]
ref = "accompanistVersion"

[libraries.accompanist-swiperefresh]
module = "com.google.accompanist:accompanist-swiperefresh"
[libraries.accompanist-swiperefresh.version]
ref = "accompanistVersion"

[libraries.accompanist-flowlayout]
module = "com.google.accompanist:accompanist-flowlayout"
[libraries.accompanist-flowlayout.version]
ref = "accompanistVersion"
```

#### Reflection

Reflection is a set of language and library features that allows you to introspect the structure of your program at runtime.

```toml title="Version Catalogs"
[libraries.kotlin-reflect]
module = "org.jetbrains.kotlin:kotlin-reflect"
[libraries.kotlin-reflect.version]
ref = "kotlinVersion"
```

#### Hilt Android

Hilt is a dependency injection library for Android that reduces the boilerplate of doing manual dependency injection in your project.

```toml title="Version Catalogs"
[libraries.hilt-android]
module = "com.google.dagger:hilt-android"
[libraries.hilt-android.version]
ref = "hiltAndroidVersion"

[libraries.hilt-android-compiler]
module = "com.google.dagger:hilt-android-compiler"
[libraries.hilt-android-compiler.version]
ref = "hiltAndroidVersion"
```

#### Hilt Compose

Hilt includes extensions for providing classes from other Jetpack libraries.

```toml title="Version Catalogs"
[libraries.hilt-navigation-compose]
module = "androidx.hilt:hilt-navigation-compose"
[libraries.hilt-navigation-compose.version]
ref = "hiltNavigationComposeVersion"
```

#### Jetpack Compose

Define your UI programmatically with composable functions that describe its shape and data dependencies.

```toml title="Version Catalogs"
[libraries.ui]
module = "androidx.compose.ui:ui"
[libraries.ui.version]
ref = "composeVersion"

[libraries.ui-tooling]
module = "androidx.compose.ui:ui-tooling"
[libraries.ui-tooling.version]
ref = "composeVersion"

[libraries.ui-tooling-preview]
module = "androidx.compose.ui:ui-tooling-preview"
[libraries.ui-tooling-preview.version]
ref = "composeVersion"

[libraries.foundation]
module = "androidx.compose.foundation:foundation"
[libraries.foundation.version]
ref = "composeVersion"

[libraries.material]
module = "androidx.compose.material:material"
[libraries.material.version]
ref = "composeVersion"

[libraries.material-icons-extended]
module = "androidx.compose.material:material-icons-extended"
[libraries.material-icons-extended.version]
ref = "composeVersion"

[libraries.activity-compose]
module = "androidx.activity:activity-compose"
[libraries.activity-compose.version]
ref = "activityComposeVersion"

[libraries.navigation-compose]
module = "androidx.navigation:navigation-compose"
[libraries.navigation-compose.version]
ref = "navigationComposeVersion"
```

#### Serialization

JSON serialization library dependency

```toml title="Version Catalogs"
[libraries.kotlinx-serialization-json]
module = "org.jetbrains.kotlinx:kotlinx-serialization-json"
[libraries.kotlinx-serialization-json.version]
ref = "jsonSerializationVersion"
```

#### Room

The Room persistence library provides an abstraction layer over SQLite to allow for more robust database access while harnessing the full power of SQLite.

```toml title="Version Catalogs"
[libraries.room-runtime]
module = "androidx.room:room-runtime"
[libraries.room-runtime.version]
ref = "roomVersion"

[libraries.room-ktx]
module = "androidx.room:room-ktx"
[libraries.room-ktx.version]
ref = "roomVersion"

[libraries.room-paging]
module = "androidx.room:room-paging"
[libraries.room-paging.version]
ref = "roomVersion"

[libraries.room-compiler]
module = "androidx.room:room-compiler"
[libraries.room-compiler.version]
ref = "roomVersion"
```

#### Versions

```toml
[versions]
# https://kotlinlang.org/docs/releases.html#release-details
kotlinVersion = "1.7.20"

# https://developer.android.com/jetpack/androidx/releases/compose
composeVersion = "1.3.0"

# https://developer.android.com/jetpack/androidx/releases/activity
activityComposeVersion = "1.6.1"

# https://developer.android.com/jetpack/compose/navigation
navigationComposeVersion = "2.5.3"

# https://developer.android.com/jetpack/compose/libraries#hilt-navigation
hiltNavigationComposeVersion = "1.0.0"

# https://github.com/google/accompanist/releases
accompanistVersion = "0.28.0"

# https://developer.android.com/training/dependency-injection/hilt-android
hiltAndroidVersion = "2.44"

# https://github.com/Kotlin/kotlinx.serialization/blob/master/formats/README.md#json
jsonSerializationVersion="1.4.1"

# https://developer.android.com/jetpack/androidx/releases/room
roomVersion = "2.4.3"

# https://github.com/airbnb/lottie/blob/master/android-compose.md
lottieVersion = "5.2.0"

# https://coil-kt.github.io/coil/compose/
coilVersion = "2.2.2"

# https://github.com/ktorio/ktor/releases
ktorVersion = "2.1.3"
```