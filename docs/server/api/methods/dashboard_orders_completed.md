Dashboard Orders Completed
===================

Order statistics (status completed) for the month

```shell title="Method <span class='color-method'>GET</span>"
/api/dashboard/orders-completed
```

Response example

```json title="Response <span class='color-200'>200</span>"
{
    "count": 2,
    "percent": 100
}
```

Response options

| Status code                          | Description    |
|--------------------------------------|----------------|
| <span class='color-200'>200</span>   | OK             |
| <span class='color-error'>500</span> | Internal Error |