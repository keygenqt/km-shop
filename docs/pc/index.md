PC application
===

<p class="icons-main">
    <img src="/km-shop/images/ic_cli.png">
    <img src="/km-shop/images/ic_pc.png">
</p>

На самом деле приложения 2. 
Одно работает как CLI приложение (client). 
Второе приложение имеет GUI и написано на [Qt](https://www.qt.io/) (app).
Взаимодействие их осуществляется через [D-Bus](https://www.freedesktop.org/wiki/Software/dbus/).
Использование CLI приложения возможно, но не очень удобно. Так что можно считать их единым целым.
К приложению client подключен модуль Kotlin Multiplatform которые дает все фичи доступные в нем.
Приложение app зависит от него и всю логику по работе с WebSocket и остальные запросы выполняет client отправляя сигналы по D-Bus.

### <a id='overview-client' href='#overview-client'><span class='icon-line'><img src="/km-shop/images/ic_cli.png"></span></a> Нюансы сборки Client

Сборка клиента стандартна для JVM приложения.
Заходим в shop -> pc -> client ... Main.kt.
Запустим приложение.
Не забудьте добавить в сборку artifact shared-jvm.
После сборки в build -> libs у вас будет собран fat-jar `shop-pc-client.jar`. 
Который можно использовать как CLI, так и запускать GUI приложение которое от него зависит.

### <a id='overview-app' href='#overview-app'><span class='icon-line'><img src="/km-shop/images/ic_pc.png"></span></a> Нюансы сборки App

Сборка приложения Qt осуществляется в Qt Creator.
Ничего особого нет за исключением того что нужна запущенная копия client приложения.
Между собой они общаются по D-Bus.

!!! warning "Доставка приложения"

    Приложение протестировано на Linux, хотя компоненты позволяют его использовать на всех доступных платформах для Qt & Java.
    Компоненты 1-го приложения сейчас находятся в 2-х приложениях, требуется сборка этих компонентов воедино для конкретной платформы.
    Как варианта сборка deb пакета или flatpak || snap.

    Задачу по доставке перед собой не ставил.
    Путь запуска из `app` приложение `client` - хардкод!