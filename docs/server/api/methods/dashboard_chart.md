Dashboard Chart
===================

Building an order schedule

<img style="height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f536.png"/> &nbsp;
Method: <code>GET</code>

```
/api/dashboard/chart
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