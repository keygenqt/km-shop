Web applications
===

<p class="icons-main">
    <img src="/km-shop/images/ic_react.png">
</p>

2 приложения на React. 
Это основной Website для клиентов и Admin-Panel для администраторов.
Это чистый React с модулем Kotlin Multiplatform на JS, который подключается к проекту и помогает писать меньше кода.
Тесть вы работаете с сайтами как с обычным проектом на React, с нюансом в виде KM модуля которые подключается в `package.json`.

### Нюансы сборки

`package.json` я заменил на `package.conf`. 
Это позволяет разбить файл на несколько и описать зависимости.
Все знают что в json комментарий не оставить.
Установите приложение *hocon-parser*, которое превратит его в package.json при запуске install.sh.

```shell title="Install hocon-parser"
npm install -g @pushcorn/hocon-parser
```

И так нам нужно подключить модуль и `package.conf` превратить в `package.json`.
В корне проекта есть скрипт `install.sh` для этих вещей.

```bash title="Install"
#!/bin/bash

SHARED=$(ls ../shared*)

parse-hocon package.conf > package.json

npm install "$SHARED"
```

Чтобы запустить приложение React из Android Studio, добавьте *Shell script* в конфигурацию сборки.
Нам нужно доставить модуль *shared* в проект на React.
Что он обновлялся, в название был добавлен timestamp при его сборке.

```shell title="Command for build"
find ../ -maxdepth 1 -type f -name "*.tgz" -delete && mv ../../../shared/build/packages/shared* ../ && ./install.sh && npm run start
```

И чтобы собрать KM модуль при запуске, добавьте 2 команды *Gradle*: **clean** и **packJsPackage**

<div class="PrettyImage">
    <img src="/km-shop/images/web/Screenshot_2022-12-30_at_04.22.13.png">
</div>

Сборку можно посмотреть на YouTube

<a target="_blank" href="https://youtu.be/Nmne4W4ktH0?t=294">
    <img src="/km-shop/images/btn_youtube.gif" style="height: 50px;">
</a>