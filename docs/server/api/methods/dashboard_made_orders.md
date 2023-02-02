Dashboard Made Orders
===================

Order statistics (all statuses) per month

```shell title="Method <span class='color-method'>GET</span>"
/api/dashboard/made-orders
```

Response example

```json title="Response <span class='color-200'>200</span>"
{
    "count": 8,
    "percent": 100
}
```

Response options

| Status code                          | Description    |
|--------------------------------------|----------------|
| <span class='color-200'>200</span>   | OK             |
| <span class='color-error'>500</span> | Internal Error |