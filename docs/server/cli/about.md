CLI application
===

CLI The application to which the Kotlin Multiplatform module is connected.
Able to make backups, clean up unnecessary, update user passwords before launching the application API.
It will conveniently run with *cron* to perform routine server maintenance work.

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