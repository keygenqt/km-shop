# Android application

Нативное приложение Android использующие [Jetpack Compose](https://developer.android.com/jetpack/compose) и общий модуль Kotlin Multiplatform.
Функционал соответствует приложению Website.
Плюс добавлена фича истории сделанных заказов и история поиска заказов.

<p>
<img src="/images/android/android_l.png" width="32%"/>
<img src="/images/android/android_d.png" width="32%"/>
<img src="/images/android/android_anim.gif" width="32%"/>
</p>

#### Architecture

* [MVVM](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)
* [Jetpack Compose](https://developer.android.com/jetpack/compose)
* [KMM](https://kotlinlang.org/docs/multiplatform-mobile-getting-started.html)

#### Features

* Home page with top categories
* Search order by number
* History order
* List products
* Product public page with multiple image preview
* Contacts with map webview & send message
* Cart with make order

#### Contains

* Filters price products, sort products
* Theme light/dark
* Coroutine
* Room flow
* Paging
* Combine image with coil
* Custom logging ktor
* Lottie animation
* And more...