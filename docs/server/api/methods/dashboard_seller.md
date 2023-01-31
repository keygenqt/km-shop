Dashboard Bestseller
===================

List of best orders

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f536.png"/> &nbsp;
Method: <code>GET</code>

```
/api/dashboard/seller
```

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/26ab.png"/> &nbsp;
<b>HTTP response status codes</b>

| Status code | Description    |
|-------------|----------------|
| 200         | OK             |
| 500         | Internal Error |

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f197.png"/> &nbsp;
<b>Status: 200</b>

```json
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