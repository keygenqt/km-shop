Login
===================

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f536.png"/> &nbsp;
Method: <code>POST</code>

```
/api/login
```

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f518.png"/> &nbsp;
<b>Parameters</b>

```
private data class Request(
    @field:NotNullNotBlank
    @field:Email(message = "Must be a valid email")
    val email: String? = null,

    @field:NotNullNotBlank
    @field:Size(min = 8, max = 12, message = "Size must be between 8 and 12")
    val password: String? = null
)
```

<img style=height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/26ab.png"/> &nbsp;
<b>HTTP response status codes</b>

| Status code | Description    |
|-------------|----------------|
| 200         | OK             |
| 400         | Bad Request    |
| 422         | Form validate  |
| 500         | Internal Error |

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f197.png"/> &nbsp;
<b>Status: 200</b>

```
{
    "id": 1,
    "email": "guest@keygenqt.com",
    "role": "GUEST"
}
```

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f534.png"/> &nbsp;
<b>Status: 422</b>

```
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

<!---
<style>
  .md-content__button {
    display: none;
  }
</style>
-->