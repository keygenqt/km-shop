Get By ID
===================

Get category for auth user (Admin Panel)

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f536.png"/> &nbsp;
Method: <code>GET</code>

```
/api/categories/{id}
```

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/26ab.png"/> &nbsp;
<b>HTTP response status codes</b>

| Status code | Description    |
|-------------|----------------|
| 200         | OK             |
| 500         | Internal Error |

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f197.png"/> &nbsp;
<b>Status: 200</b>

```
{
    "id": 1,
    "key": "bows",
    "name": "Бантики",
    "desc": "Стильные бантики ручной работы",
    "image": "https://shop-api.keygenqt.com/api/uploads/99959269-6122-47f9-a383-00f5e6c5b657.png",
    "isPublished": true,
    "createAt": "2022-12-08T13:43:46.626",
    "updateAt": "2022-12-08T13:43:46.626",
    "uploads": [
        {
            "id": 1,
            "fileName": "99959269-6122-47f9-a383-00f5e6c5b657.png",
            "fileMime": "image/png",
            "originalFileName": "configuration/migrations/data/category/cat_1.png",
            "createAt": "2022-12-08T13:43:46.623"
        }
    ]
}
```