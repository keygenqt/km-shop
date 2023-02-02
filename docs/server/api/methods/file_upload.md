File Upload
===================

Upload file to server

```shell title="Method <span class='color-method'>POST</span>"
/api/uploads
```

Response example

```json title="Response <span class='color-200'>200</span>"
{
    "id": 1,
    "fileName": "d523f3fb-a8fe-49d9-9e67-3ce8b3231037.png",
    "fileMime": "image/png",
    "originalFileName": "screenshot-17.png",
    "createAt": 1661592987307
}
```

Response options

| Status code                          | Description    |
|--------------------------------------|----------------|
| <span class='color-200'>200</span>   | OK             |
| <span class='color-error'>400</span> | Bad Request    |
| <span class='color-error'>500</span> | Internal Error |