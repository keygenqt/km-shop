List Categories
===================

Get list categories for auth user

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f536.png"/> &nbsp;
Method: <code>GET</code>

```
/api/categories
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
[
    {
        "id": 1,
        "key": "bows",
        "name": "Бантики",
        "desc": "Стильные бантики ручной работы",
        "image": "https://shop-api.keygenqt.com/api/uploads/99959269-6122-47f9-a383-00f5e6c5b657.png",
        "isPublished": true,
        "createAt": "2022-12-08T13:43:46.626",
        "updateAt": "2022-12-08T13:43:46.626"
    },
    {
        "id": 3,
        "key": "sets",
        "name": "Наборы",
        "desc": "Наборы бантиков на каждый день",
        "image": "https://shop-api.keygenqt.com/api/uploads/587df887-a377-43f9-8ff0-b2c2521d41dc.png",
        "isPublished": true,
        "createAt": "2022-12-08T13:43:46.628",
        "updateAt": "2022-12-08T13:43:46.628"
    },
    {
        "id": 2,
        "key": "headbands",
        "name": "Ободки",
        "desc": "Держите свои волосы красиво",
        "image": "https://shop-api.keygenqt.com/api/uploads/6ca4a93e-d928-4408-ae24-b70fd5db3dd5.png",
        "isPublished": true,
        "createAt": "2022-12-08T13:43:46.627",
        "updateAt": "2022-12-08T13:43:46.627"
    }
]
```