iOS application
===

Нативное приложение iOS использующие [swiftUI](https://developer.apple.com/xcode/swiftui/) и общий модуль Kotlin Multiplatform.
Функционал соответствует приложению Website.
Плюс добавлена фича истории сделанных заказов и история поиска заказов.

<p>
<img src="/km-shop/images/ios/ios_l.png" width="31%"/>
<img src="/km-shop/images/ios/ios_d.png" width="31%"/>
<img src="/km-shop/images/ios/ios_anim.gif" width="32.5%"/>
</p>

### Architecture
* [MVVM](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)
* [SwiftUI](https://developer.apple.com/xcode/swiftui/)
* [KMM](https://kotlinlang.org/docs/multiplatform-mobile-getting-started.html)

### Features
* Home page with top categories
* Search order by number
* History order
* List products
* Product public page with multiple image preview
* Contacts with map webview & send message
* Cart with make order

### Contains
* Filters price products, sort products
* Theme light/dark
* Realm DB
* Paging
* Combine image with Kingfisher
* SVGKit
* SwiftGen
* SwiftLint
* Lottie animation
* And more...