Dashboard Made Orders
===================

Статистика по заказам (все статусы) за месяц

```shell title="Method <span class='color-method'>GET</span>"
/api/dashboard/made-orders
```

Пример ответа

```json title="Response <span class='color-200'>200</span>"
{
    "count": 8,
    "percent": 100
}
```

Варианты ответа

| Status code                          | Description    |
|--------------------------------------|----------------|
| <span class='color-200'>200</span>   | OK             |
| <span class='color-error'>500</span> | Internal Error |