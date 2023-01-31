File Upload
===================

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f536.png"/> &nbsp;
Method: <code>POST</code>

```
/api/uploads
```

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/26ab.png"/> &nbsp;
<b>HTTP response status codes</b>

| Status code | Description    |
|-------------|----------------|
| 200         | OK             |
| 400         | Bad Request    |
| 500         | Internal Error |

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f197.png"/> &nbsp;
<b>Status: 200</b>

```json
{
    "id": 1,
    "fileName": "d523f3fb-a8fe-49d9-9e67-3ce8b3231037.png",
    "fileMime": "image/png",
    "originalFileName": "screenshot-17.png",
    "createAt": 1661592987307
}
```