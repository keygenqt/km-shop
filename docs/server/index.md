Server applications
===

<p class="icons-main">
    <img src="/km-shop/images/ic_cli.png">
</p>

2 приложения.
Приложение на [Ktor](https://ktor.io/) отвечает за API.
Приложение на [kotlinx-cli](https://github.com/Kotlin/kotlinx-cli) помогает API, делает backup-ы, чистит устаревшие картинки и тд.
К ним обоим подключен модуль Kotlin Multiplatform, который связывает их, дает доступ к базе данных и остальным фичам.

### <a id='overview-api' href='#overview-api'><span class='icon-line'><img src="/km-shop/images/ic_cli.png"></span></a> Нюансы сборки API


Обычное приложение на Ktor. 
Исключение составляет общий модуль KM. 
Модуль отвечает за базу данных и умеет делать запросы - на борту есть Ktor client.
Он подключается и к CLI и к API что дает полную свободу действий им обоим.

Первое, что нужно добавить, это Material иконки. 
Они используются в фиче Collections.
Для этого в корень проекта перенесите папку с иконками под названием *material-icons*.
Достать их можно [здесь](https://github.com/material-icons/material-icons).

После этого перейдите в каталог *configuration* и переименуйте файлы конфигурации:

```shell title="Rename demo configuration"
mv _app.properties app.properties
mv dbconfig.properties dbconfig.properties
```

Эти файлы содержат ключи и различные доступы. Они загружаются во время работы приложения.
Не забудьте поменять ключи в проде.
Создайте базу данных *MySql* и пользователя для нее. 
Прописываем доступы в *dbconfig.properties*

Заходим в директорию shop -> server -> api... Application.kt - запускаем приложение, оно вылетит, все ок.
Он будет добавлен в Конфигурацию сборки (если хотите, можете использовать ручки).
Затем переходим к конфигурации сборки и добавляем артефакт *shared module*, который будет собираться с приложением.
Теперь все могут его запускать - все должно работать.

<div class="PrettyImage">
    <img src="/km-shop/images/overview/Screenshot_2022-12-30_at_05.05.55.png">
</div>

#### Сборку можно посмотреть на YouTube

<a target="_blank" href="https://youtu.be/Nmne4W4ktH0">
    <img src="/km-shop/images/btn_youtube.gif" style="height: 50px;">
</a>

### <a id='overview-cli' href='#overview-cli'><span class='icon-line'><img src="/km-shop/images/ic_cli.png"></span></a> Нюансы сборки CLI

Обычное JVM-приложение. 
Его задача выполнять различные полезные действия, например делать бекап, по командам *crone*.
Заходим в shop -> server -> cli ... Main.kt. 
Запустим приложение.
Не забудьте добавить в сборку artifact shared-jvm.

<div class="PrettyImage">
    <img src="/km-shop/images/overview/Screenshot_2022-12-30_at_04.34.13.png">
</div>

#### Сборку можно посмотреть на YouTube

<a target="_blank" href="https://youtu.be/Nmne4W4ktH0?t=894">
    <img src="/km-shop/images/btn_youtube.gif" style="height: 50px;">
</a>