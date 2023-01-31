Dashboard Bestseller
===================

Список лучших заказов

```shell title="Method <span class='color-method'>GET</span>"
/api/dashboard/seller
```



Пример ответа

```json title="Response <span class='color-200'>200</span>"
[
    {
        "id": 6,
        "number": "659c1100-a37e-427b-93b9-191faa93d296",
        "email": "",
        "phone": "+7 (967) 300 50 75",
        "address": "",
        "note": "",
        "state": "PENDING",
        "sum": 19902.100000000002,
        "products": [
            {
                "price": 800.2,
                "count": 2,
                "sum": 1600.4,
                "product": {
                    "id": 7,
                    "category": {
                        "id": 1,
                        "key": "bows",
                        "name": "Бантики",
                        "desc": "Стильные бантики ручной работы",
                        "image": "https://shop-api.keygenqt.com/api/uploads/99959269-6122-47f9-a383-00f5e6c5b657.png",
                        "isPublished": true,
                        "createAt": "2022-12-08T13:43:46.626",
                        "updateAt": "2022-12-08T13:43:46.626"
                    },
                    "image1": "https://shop-api.keygenqt.com/api/uploads/2e303c28-aa4e-4a00-95d8-4ed3c0d3545a.png",
                    "image2": null,
                    "image3": null,
                    "name": "Caroline",
                    "description": "Hairpin stylized.",
                    "price": 800.2,
                    "isPublished": true,
                    "createAt": "2022-12-08T13:43:46.678",
                    "updateAt": "2022-12-08T13:43:46.678",
                    "collections": [
                    ]
                }
            }
        ],
        "createAt": "2022-12-08T13:43:46.795",
        "updateAt": "2022-12-08T13:43:46.795"
    }
]
```

Варианты ответа

| Status code                          | Description    |
|--------------------------------------|----------------|
| <span class='color-200'>200</span>   | OK             |
| <span class='color-error'>500</span> | Internal Error |