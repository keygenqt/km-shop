CLI application
===

CLI Приложение к которому подключен модуль Kotlin Multiplatform. 
Умеет делать бекапы, чистить лишнее, обновлять пароли пользователя до запуска API приложения.
Удобно запустит с *cron* что бы выполнять рутинную работу по поддержке сервера.

```shell title="Help app"
Usage: Shop CLI options_list
Subcommands: 
    backup - Backup data (default db) { db, files }
    cleaner - Cleaner files without relations in db
    password - Password update

Options: 
    --debug [false] -> Enable debug mode 
    --help, -h -> Usage info 
```

#### Features

* Backup db
* Backup uploads
* Upload backup to FTP
* Cleaning files without relations in db
* Update password users

#### Commands

```bash
## Cleaning files without relations in db
shop cleaner

## backup database
shop backup --type db

## backup uploads folder
shop backup --type files

## Update password
shop password --email admin@gmail.com --password 12345678

## Update with random password
shop password --email admin@gmail.com
```