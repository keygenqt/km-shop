Ошибки
===================

All variants of errors processed by the server.

Response examples

```json title="Error <span class='color-error'>405</span>"
{
    "code": 405,
    "message": "Method Not Allowed"
}
```

```json title="Error <span class='color-error'>400</span>"
{
    "code": 400,
    "message": "Bad Request"
}
```

```json title="Error <span class='color-error'>401</span>"
{
    "code": 401,
    "message": "Unauthorized"
}
```

```json title="Error <span class='color-error'>403</span>"
{
    "code": 403,
    "message": "Forbidden"
}
```

```json title="Error <span class='color-error'>404</span>"
{
    "code": 404,
    "message": "NotFound"
}
```

```json title="Error <span class='color-error'>422</span>"
{
    "code": 422,
    "message": "Unprocessable Entity",
    "validate": [
        {
            "filed": "password",
            "errors": [
                "Size must be between 8 and 12"
            ]
        }
    ]
}
```

```json title="Error <span class='color-error'>500</span>"
{
    "code": 500,
    "message": "Internal Error"
}
```

Response options

| Status code                          | Description          |
|--------------------------------------|----------------------|
| <span class='color-error'>405</span> | Method Not Allowed   |
| <span class='color-error'>400</span> | Bad Request          |
| <span class='color-error'>401</span> | Unauthorized         |
| <span class='color-error'>403</span> | Forbidden            |
| <span class='color-error'>404</span> | NotFound             |
| <span class='color-error'>422</span> | Form validate        |
| <span class='color-error'>500</span> | Internal Error       |