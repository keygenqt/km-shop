Mobile applications
===

<p class="icons-main">
    <img src="/km-shop/images/ic_android.png">
    <img src="/km-shop/images/ic_apple.png">
    <img src="/km-shop/images/ic_aurora.png">
</p>

3 приложения. 
Приложение для [Android](https://www.android.com/). 
Приложение для [iOS](https://www.apple.com/ios/ios-16/). 
Приложение для [Aurora OS](https://auroraos.ru/).
Ко всем приложениям подключен модуль Kotlin Multiplatform который выполняет запросы к API и дает доступ к общей бизнес логике.

### <a id='overview-android' href='#overview-android'><span class='icon-line'><img src="/km-shop/images/ic_android.png"></span></a> Нюансы сборки Android

Для android KM практически нейтив. 
Все стандартно для этого приложения. 
Просто выбираем проект, Android Studio все подхватит и настроит сама.
Для работы приложения нужен запущенный предварительно API.

#### Процесс сборки можно посмотреть на YouTube

<a target="_blank" href="https://youtu.be/Nmne4W4ktH0?t=637">
    <img src="/km-shop/images/btn_youtube.gif" style="height: 50px;">
</a>

### <a id='overview-ios' href='#overview-ios'><span class='icon-line'><img src="/km-shop/images/ic_apple.png"></span></a> Нюансы сборки iOS

Выберите в параметрах файл Shop.xcworkspace (shop -> mobile -> ios -> Shop.xcworkspace).
Выберите из списка ниже Shop, цель, и вы можете начать строительство.

<div class="PrettyImage">
    <img src="/km-shop/images/overview/Screenshot_2022-12-30_at_04.33.54.png">
</div>

#### Процесс сборки можно посмотреть на YouTube

<a target="_blank" href="https://youtu.be/Nmne4W4ktH0?t=709">
    <img src="/km-shop/images/btn_youtube.gif" style="height: 50px;">
</a>

### <a id='overview-aurora' href='#overview-aurora'><span class='icon-line'><img src="/km-shop/images/ic_aurora.png"></span></a> Нюансы сборки Aurora

Aurora OS не поддерживает на данный момент работу с Kotlin Multiplatform. 
Но я нашел простой способ как модуль можно завести и туда.
Был написан компонент, который позволяет выполнять асинхронные запросы с Aurora в KM JS.
Прослойка между модулем и Aurora приложением лежит: shop -> mobile -> aurora -> kmm-js-build.
Собирает прослойку js *webpack*.
Для сборки был написан bash скрипт: shop -> mobile -> aurora -> shop -> build.sh
В нем происходит сборка JS модуля KM, доставка его в приложение на Aurora, и сборка и запуск самого приложения на Aurora OS.

!!! example "Совет по сборке"

    По-хорошему, думаю, можно чуток сделать по другому. 
    Скрипт ограничить сборкой js. 
    Добавить его в Aurora IDE перед сборкой.
    И работать уже спокойно в Aurora IDE.
    Но это другая история.

#### Процесс сборки можно посмотреть на YouTube

<a target="_blank" href="https://youtu.be/MgwiskFeR8E">
    <img src="/km-shop/images/btn_youtube.gif" style="height: 50px;">
</a>