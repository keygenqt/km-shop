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