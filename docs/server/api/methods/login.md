Login
===================

Метод авторизации пользователя

```shell title="Method <span class='color-method'>POST</span>"
/api/login
```

Request модель с валидацией

```kotlin title="Request model"
private data class Request(
    @field:NotNullNotBlank
    @field:Email(message = "Must be a valid email")
    val email: String? = null,

    @field:NotNullNotBlank
    @field:Size(min = 8, max = 12, message = "Size must be between 8 and 12")
    val password: String? = null
)
```

Пример ответа

```json title="Response <span class='color-200'>200</span>"
{
    "id": 1,
    "email": "admin@keygenqt.com",
    "role": "ADMIN"
}
```

Варианты ответа

| Status code                            | Description    |
|----------------------------------------|----------------|
| <span class='color-200'>200</span>     | OK             |
| <span class='color-error'>422</span>   | Form validate  |
| <span class='color-error'>400</span>   | Bad Request    |
| <span class='color-error'>500</span>   | Internal Error |