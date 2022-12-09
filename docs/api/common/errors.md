Errors common
===================

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/26ab.png"/> &nbsp;
HTTP errors status codes

| Status code | Description    |
|-------------|----------------|
| 422         | Form validate  |
| 400         | Bad Request    |
| 500         | Internal Error |

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

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f534.png"/> &nbsp;
<b>Status: 400</b>

```
{
    "code": 400,
    "message": "Bad Request"
}
```

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f534.png"/> &nbsp;
<b>Status: 500</b>

```
{
    "code": 500,
    "message": "Internal Error"
}
```

<!---
<style>
  .md-content__button {
    display: none;
  }
</style>
-->