PC application
===

<p class="icons-main">
    <img src="/km-shop/images/ic_cli.png">
    <img src="/km-shop/images/ic_pc.png">
</p>

Actually 2 apps.
One works as a CLI application (client).
The second application has a GUI and is written in [Qt](https://www.qt.io/) (app).
They communicate via [D-Bus](https://www.freedesktop.org/wiki/Software/dbus/).
Using the CLI application is possible, but not very convenient. So you can consider them as one.
The Kotlin Multiplatform module is connected to the client application, which provides all the features available in it.
The app application depends on it, and all the logic for working with WebSocket and other requests is performed by the client by sending signals via D-Bus.

### <a id='overview-client' href='#overview-client'><span class='icon-line'><img src="/km-shop/images/ic_cli.png"></span></a> Build Client

The client assembly is standard for the JVM application.
Go to shop -> pc -> client ... Main.kt.
Let's start the application.
Don't forget to add the artifact shared-jvm to the build.
After building in build -> libs you will have fat-jar `shop-pc-client.jar` built.
Which can be used as a CLI, and run a GUI application that depends on it.

### <a id='overview-app' href='#overview-app'><span class='icon-line'><img src="/km-shop/images/ic_pc.png"></span></a> Build App

Building a Qt application is done in Qt Creator.
There is nothing special except that you need a running copy of the client application.
They communicate with each other via D-Bus.

!!! warning "Application Delivery"

    The application is tested on Linux, although the components allow it to be used on all available platforms for Qt & Java.
    The components of the 1st application are now in 2 applications, it is required to assemble these components together for a specific platform.
    As an option, build a deb package or flatpak || snap.
    
    I did not set myself the task of delivery.
    Launch path from `app` application `client` is hardcoded!