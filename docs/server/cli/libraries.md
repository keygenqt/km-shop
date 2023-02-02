Libraries
===

#### Google Core Libraries For Java

Guava is a suite of core and expanded libraries that include utility classes, Google's collections, I/O classes, and much more.

```toml title="Version Catalogs"
[libraries.guava]
module = "com.google.guava:guava"
[libraries.guava.version]
ref = "guavaVersion"
```

#### Apache Commons Net

Apache Commons Net™ library implements the client side of many basic Internet protocols.

```toml title="Version Catalogs"
[libraries.commons-net]
module = "commons-net:commons-net"
[libraries.commons-net.version]
ref = "commonsNetVersion"
```

#### Exposed

ORM framework for Kotlin.

```toml title="Version Catalogs"
[libraries.exposed-core]
module = "org.jetbrains.exposed:exposed-core"
[libraries.exposed-core.version]
ref = "exposedVersion"

[libraries.exposed-dao]
module = "org.jetbrains.exposed:exposed-dao"
[libraries.exposed-dao.version]
ref = "exposedVersion"
```

#### HOCON Config

Configuration library for JVM languages.

```toml title="Version Catalogs"
[libraries.config]
module = "com.typesafe:config"
[libraries.config.version]
ref = "configVersion"
```

#### Koin

Koin is a smart Kotlin dependency injection library to keep you focused on your app, not on your tools

```toml title="Version Catalogs"
[libraries.koin-core]
module = "io.insert-koin:koin-core"
[libraries.koin-core.version]
ref = "koinVersion"
```

#### kotlinx-cli

Pure Kotlin implementation of a generic command-line parse.

```toml title="Version Catalogs"
[libraries.kotlinx-cli]
module = "org.jetbrains.kotlinx:kotlinx-cli"
[libraries.kotlinx-cli.version]
ref = "kotlinxCLIVersion"
```

#### kotlinx-coroutines

Library support for Kotlin coroutines with multiplatform support.

```toml title="Version Catalogs"
[libraries.kotlinx-coroutines-core]
module = "org.jetbrains.kotlinx:kotlinx-coroutines-core"
[libraries.kotlinx-coroutines-core.version]
ref = "coroutinesVersion"
```

#### Logback Project

Logback is intended as a successor to the popular log4j project, picking up where log4j 1.x leaves off.

```toml title="Version Catalogs"
[libraries.logback-classic]
module = "ch.qos.logback:logback-classic"
[libraries.logback-classic.version]
ref = "logbackVersion"
```

#### Ktor

Ktor is an asynchronous framework for creating microservices, web applications and more.

```toml title="Version Catalogs"
[libraries.ktor-client-logging]
module = "io.ktor:ktor-client-logging"
[libraries.ktor-client-logging.version]
ref = "ktorVersion"
```

#### Versions

```toml
[versions]
# https://github.com/ktorio/ktor/releases
ktorVersion = "2.1.3"

# https://insert-koin.io/docs/setup/koin#core
koinVersion="3.2.2"

# https://github.com/Kotlin/kotlinx-cli
kotlinxCLIVersion = "0.3.5"

# https://github.com/Kotlin/kotlinx.coroutines/blob/master/README.md
coroutinesVersion = "1.6.4"

# https://github.com/lightbend/config
configVersion = "1.4.2"

# https://github.com/JetBrains/Exposed/releases
exposedVersion="0.39.2"

# https://mvnrepository.com/artifact/ch.qos.logback/logback-classic
logbackVersion = "1.4.4"

# https://commons.apache.org/proper/commons-net/
commonsNetVersion = "3.6"

# https://mvnrepository.com/artifact/com.google.guava/guava
guavaVersion = "26.0-jre"
```