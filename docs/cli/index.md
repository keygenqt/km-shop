Part Server CLI
===================

![picture](/km-shop/data/cli/Screenshot_2022-11-09_at_14.38.24.png)

### Features

* server data backup
* cleaning up obsolete files and data
* sending firebase push messages

### Backup
```shell
## backup DB tables
shop backup --type db
## backup images folder
shop backup --type images
```

### Cleaner
```shell
## Clean old tokens (keep the base clean)
shop cleaner --type tokens
## Clean the folder with pictures if they are not in the database
shop cleaner --type images
```

### Notifications
```shell
## Push notifications firebase
mylibrary notification
```