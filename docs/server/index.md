Server applications
===

<p class="icons-main">
    <img src="/km-shop/images/ic_cli.png">
</p>

2 приложения.
Приложение на [Ktor](https://ktor.io/) отвечает за API.
Приложение на [kotlinx-cli](https://github.com/Kotlin/kotlinx-cli) помогает API, делает backup-ы, чистит устаревшие картинки и тд.
К ним обоим подключен модуль Kotlin Multiplatform, который связывает их, дает доступ к базе данных и остальным фичам.