Login
===================

User authorization method for admin panel

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f536.png"/> &nbsp;
Method: <code>POST</code>

```
/api/login
```

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f518.png"/> &nbsp;
<b>Request</b>

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

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/26ab.png"/> &nbsp;
<b>HTTP response status codes</b>

| Status code | Description    |
|-------------|----------------|
| 200         | OK             |
| 422         | Form validate  |
| 400         | Bad Request    |
| 500         | Internal Error |

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f197.png"/> &nbsp;
<b>Status: 200</b>

```
{
    "id": 1,
    "email": "admin@keygenqt.com",
    "role": "ADMIN"
}
```