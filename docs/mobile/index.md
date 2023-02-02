Mobile applications
===

<p class="icons-main">
    <img src="/km-shop/images/ic_android.png">
    <img src="/km-shop/images/ic_apple.png">
    <img src="/km-shop/images/ic_aurora.png">
</p>

3 applications.
App for [Android](https://www.android.com/).
App for [iOS](https://www.apple.com/ios/ios-16/).
Application for [Aurora OS](https://auroraos.ru/).
All applications are connected to the Kotlin Multiplatform module, which makes requests to the API and gives access to the general business logic.

### <a id='overview-android' href='#overview-android'><span class='icon-line'><img src="/km-shop/images/ic_android.png"></span></a> Build Android

For android KM is practically native.
Everything is standard for this application.
Just select a project, Android Studio will pick up everything and configure itself.
For the application to work, a pre-launched API is required.

#### You can watch the build process on YouTube

<a target="_blank" href="https://youtu.be/Nmne4W4ktH0?t=637">
    <img src="/km-shop/images/btn_youtube.gif" style="height: 50px;">
</a>

### <a id='overview-ios' href='#overview-ios'><span class='icon-line'><img src="/km-shop/images/ic_apple.png"></span></a> Build iOS

Select the Shop.xcworkspace file in the options (shop -> mobile -> ios -> Shop.xcworkspace).
Choose from the list below a Shop, a target, and you can start building.

<div class="PrettyImage">
    <div class="PrettyImageLoading">Loading...</div>
    <img src="/km-shop/images/overview/Screenshot_2022-12-30_at_04.33.54.png">
</div>

#### You can watch the build process on YouTube

<a target="_blank" href="https://youtu.be/Nmne4W4ktH0?t=709">
    <img src="/km-shop/images/btn_youtube.gif" style="height: 50px;">
</a>

### <a id='overview-aurora' href='#overview-aurora'><span class='icon-line'><img src="/km-shop/images/ic_aurora.png"></span></a> Build Aurora

Aurora OS does not currently support Kotlin Multiplatform.
But I found a simple way how the module can be brought there too.
A component was written that allows you to perform asynchronous requests with Aurora in KM JS.
The layer between the module and the Aurora application is: shop -> mobile -> aurora -> kmm-js-build.
Builds js layer *webpack*.
A bash script was written for the build: shop -> mobile -> aurora -> shop -> build.sh
It builds the KM JS module, delivers it to the application on Aurora, and builds and launches the application itself on Aurora OS.

!!! example "Build advice"

    In a good way, I think you can do a little differently.
    Script to restrict assembly js.
    Add it to Aurora IDE before building.
    And work already quietly in Aurora IDE.
    But that's another story.

#### You can watch the build process on YouTube

<a target="_blank" href="https://youtu.be/MgwiskFeR8E">
    <img src="/km-shop/images/btn_youtube.gif" style="height: 50px;">
</a>