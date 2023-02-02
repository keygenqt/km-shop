Web applications
===

<p class="icons-main">
    <img src="/km-shop/images/ic_react.png">
</p>

2 applications on React.
This is the main Website for clients and Admin-Panel for administrators.
This is pure React with a Kotlin Multiplatform JS module that connects to the project and helps to write less code.
Father-in-law, you work with sites as with a regular React project, with a nuance in the form of a KM module that is connected to `package.json`.

### <a id='overview-react' href='#overview-react'><span class='icon-line'><img src="/km-shop/images/ic_react.png"></span></a> Build

I replaced `package.json` with `package.conf`.
This allows you to split the file into several and describe the dependencies.
Everyone knows that you can't leave a comment in json.
Install the *hocon-parser* application, which will turn it into a package.json when you run install.sh.

```shell title="Install hocon-parser"
npm install -g @pushcorn/hocon-parser
```

And so we need to include the module and turn `package.conf` into `package.json`.
There is an `install.sh` script at the root of the project for these things.

```bash title="Install"
#!/bin/bash

SHARED=$(ls ../shared*)

parse-hocon package.conf > package.json

npm install "$SHARED"
```

To run a React app from Android Studio, add *Shell script* to your build configuration.
We need to deliver the *shared* module to the React project.
That it was updated, a timestamp was added to the name when it was assembled.

```shell title="Command for build"
find ../ -maxdepth 1 -type f -name "*.tgz" -delete && mv ../../../shared/build/packages/shared* ../ && ./install.sh && npm run start
```

And to build the KM module on startup, add 2 *Gradle* commands: **clean** and **packJsPackage**

<div class="PrettyImage">
    <img src="/km-shop/images/overview/Screenshot_2022-12-30_at_04.22.13.png">
</div>

#### You can watch the build process on YouTube

<a target="_blank" href="https://youtu.be/Nmne4W4ktH0?t=294">
    <img src="/km-shop/images/btn_youtube.gif" style="height: 50px;">
</a>