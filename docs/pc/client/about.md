Notificator CLI
===

Приложение в первую очередь предназначено для работы с GUI. 
Но так же умеет работать и самостоятельно как CLI приложение.

```shell title="Help app"
Usage: Shop client CLI options_list
Subcommands: 
    auth - User authorization

Options: 
    --run, -r -> Launch client 
    --logout, -l -> Logout client 
    --help, -h -> Usage info 
```

#### Features

* Auth in API
* Connect to WebSocket
* Get count new messages
* Get count new orders

#### Commands

```bash
## User authorization
client auth --email my@email.com --password 12345678

## Launching the app to listen for changes
client --run
```