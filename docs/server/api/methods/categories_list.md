Category List
===================

Get a list of categories

```shell title="Method <span class='color-method'>GET</span>"
/api/categories
```

Response example

```json title="Response <span class='color-200'>200</span>"
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

Response options

| Status code                          | Description    |
|--------------------------------------|----------------|
| <span class='color-200'>200</span>   | OK             |
| <span class='color-error'>500</span> | Internal Error |