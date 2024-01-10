Category Item
===================

Get category data

```shell title="Method <span class='color-method'>GET</span>"
/api/categories/{id}
```

Response example

```json title="Response <span class='color-200'>200</span>"
{
    "id": 1,
    "key": "bows",
    "name": "Бантики",
    "desc": "Стильные бантики ручной работы",
    "image": "https://myshop-api.keygenqt.com/api/uploads/99959269-6122-47f9-a383-00f5e6c5b657.png",
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

Response options

| Status code                          | Description    |
|--------------------------------------|----------------|
| <span class='color-200'>200</span>   | OK             |
| <span class='color-error'>500</span> | Internal Error |
