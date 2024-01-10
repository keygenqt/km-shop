Server applications
===

<p class="icons-main">
    <img src="/images/ic_cli.png">
</p>

2 applications.
The application on [Ktor](https://ktor.io/) is responsible for the API.
The application on [kotlinx-cli](https://github.com/Kotlin/kotlinx-cli) helps the API, makes backups, cleans outdated images, etc.
The Kotlin Multiplatform module is connected to both of them, which connects them, gives access to the database and other features.

### <a id='overview-api' href='#overview-api'><span class='icon-line'><img src="/images/ic_cli.png"></span></a> Build API

A typical application on Ktor.
The exception is the general KM module.
The module is responsible for the database and can make requests - there is a Ktor client on board.
It connects to both the CLI and the API, which gives them both complete freedom of action.

The first thing to add is the Material icon.
They are used in the Collections feature.
To do this, move the folder with icons called *material-icons* to the root of the project.
You can get them [here](https://github.com/material-icons/material-icons).

After that, go to the *configuration* directory and rename the configuration files:

```shell title="Rename demo configuration"
mv _app.properties app.properties
mv dbconfig.properties dbconfig.properties
```

These files contain keys and various accesses. They are loaded while the application is running.
Do not forget to change the keys in the prod.
Create a *MySql* database and a user for it.
We register accesses in *dbconfig.properties*

Go to the directory shop -> server -> api... Application.kt - run the application, it will crash, everything is ok.
It will be added to the Build Configuration (you can use the handles if you like).
Then we go to the build configuration and add the *shared module* artifact that will be built with the application.
Now everyone can run it - everything should work.

<div class="PrettyImage">
    <div class="PrettyImageLoading">Loading...</div>
    <img src="/images/overview/Screenshot_2022-12-30_at_05.05.55.png">
</div>

#### You can watch the build process on YouTube

<a target="_blank" href="https://youtu.be/Nmne4W4ktH0">
    <img src="/images/btn_youtube.gif" style="height: 50px;">
</a>

### <a id='overview-cli' href='#overview-cli'><span class='icon-line'><img src="/images/ic_cli.png"></span></a> Build CLI

Normal JVM application.
Its task is to perform various useful actions, for example, to make a backup, using the * crone * commands.
Go to shop -> server -> cli ... Main.kt.
Let's start the application.
Don't forget to add the artifact shared-jvm to the build.

<div class="PrettyImage">
    <div class="PrettyImageLoading">Loading...</div>
    <img src="/images/overview/Screenshot_2022-12-30_at_04.34.13.png">
</div>

#### You can watch the build process on YouTube

<a target="_blank" href="https://youtu.be/Nmne4W4ktH0?t=894">
    <img src="/images/btn_youtube.gif" style="height: 50px;">
</a>
