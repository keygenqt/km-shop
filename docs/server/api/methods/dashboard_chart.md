Dashboard Chart
===================

Построение графика заказов

```shell title="Method <span class='color-method'>GET</span>"
/api/dashboard/chart
```

Пример ответа

```json title="Response <span class='color-200'>200</span>"
{
    "series1": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2
    ],
    "series2": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
    ]
}
```

Варианты ответа

| Status code                          | Description    |
|--------------------------------------|----------------|
| <span class='color-200'>200</span>   | OK             |
| <span class='color-error'>500</span> | Internal Error |