Project build
===================

The application consists of 6 native applications and a common Kotlin Multiplatform module.
And so we have to building them all.
I made a video in which you can see the process of building all applications.

[![picture](https://keygenqt.github.io/km-shop/data/common/btn_youtube.png)](https://youtu.be/Nmne4W4ktH0)

## API

Application on Ktor. Normal jvm application.

#### Files

The project uses Material Icons. We need to upload the svg folder to the root of the project.

[https://github.com/material-icons/material-icons](https://github.com/material-icons/material-icons)

Download the zip, unpack and copy the svg folder to the root with the name *material-icons*
After that, go to the *configuration* directory and rename the configuration files:

```shell
mv _app.properties app.properties
mv dbconfig.properties dbconfig.properties
```

These files contain keys and various accesses. They are loaded while the application is running.
Do not forget to change the keys in the prod.

#### Database

Create a *MySql* database and a user for it. We register accesses in *dbconfig.properties*

#### Building

Go to the directory shop -> server -> api ... Application.kt - start the application, it will crash, it's ok.
It will be added to the Assembly Configuration (if you want, you can use handles).
Then we go to the assembly configuration and add the *shared module* artifact, which will be built with the application.
Everyone can now start it - everything should work.

![picture](https://keygenqt.github.io/km-shop/data/api/Screenshot_2022-12-30_at_05.05.55.png)

## Website / Admin-Panel

Application in React. *npm* starts it as usual.

#### Файлы

There is no usual package.json. I replaced it with package.conf (for ease of use).
Install the *hocon-parser* application which will turn it into package.json when you run install.sh

```shell
npm install -g @pushcorn/hocon-parser
```

Since there is logic with connecting *shared module* assembly and launch is carried out via install.sh

#### Files

To run a React app from Android Studio add *Shell script* to your build configuration. Start command:

```shell
find ../ -maxdepth 1 -type f -name "*.tgz" -delete && mv ../../../shared/build/packages/shared* ../ && ./install.sh && npm run start
```

And to build *shared module* at startup, add 2 *Gradle* commands: **clean** & **packJsPackage**

![picture](https://keygenqt.github.io/km-shop/data/frontend/Screenshot_2022-12-30_at_04.22.13.png)

## CLI

Normal JVM application. Its task is to perform various actions on *crone* or everything related to the server.
Go to shop -> server -> cli ... Main.kt. Let's start the application.
Don't forget to add the jvm artifact to the build.

![picture](https://keygenqt.github.io/km-shop/data/cli/Screenshot_2022-12-30_at_04.34.13.png)

## iOS

Select the Shop.xcworkspace file in the parameters (shop -> mobile -> ios -> Shop.xcworkspace).
Select from the list below Shop, target, and you can start the building.

![picture](https://keygenqt.github.io/km-shop/data/ios/Screenshot_2022-12-30_at_04.33.54.png)

## Android

You don't need to do anything - *Android Studio* will find this build itself, except to rename it.

## Kotlin Multiplatform

Assembly also requires [Kotlin Multiplatform Mobile](https://plugins.jetbrains.com/plugin/14936-kotlin-multiplatform-mobile).
It can be set in *Preferences*

![picture](https://keygenqt.github.io/km-shop/data/common/Screenshot_2022-12-30_at_04.39.52.png)

Good luck!