Get Rockets
===================

<img style="max-height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f536.png"/> &nbsp;
Method: <code>GET</code>

```
/rockets
```

<b>Code samples</b>

```
await fetch('/rockets', {
    method: 'GET'
}).then(async (response) => {
    console.log(response)
})
```

<div style="padding-top: 10px">
<img style="max-height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/26ab.png"/> &nbsp;
HTTP response status codes
</div>

| Status code | Description    |
|-------------|----------------|
| 200         | OK             |
| 500         | Internal Error |

<img style="max-height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f197.png"/> &nbsp;
<b>Status: 200</b>

```
[
    {
        "flight_number": 31,
        "name": "ABS-2A / Eutelsat 117W B",
        "date_utc": "2016-06-15T14:29:00.000Z",
        "success": true
    },
    {
        "flight_number": 21,
        "name": "ABS-3A / Eutelsat 115W B",
        "date_utc": "2015-03-02T03:50:00.000Z",
        "success": true
    },
    {
        "flight_number": 83,
        "name": "Amos-17",
        "date_utc": "2019-08-06T22:52:00.000Z",
        "success": true
    }
]
```

<img style="max-height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f534.png"/> &nbsp;
<b>Status: 500</b>

```
{
    "code": 500,
    "message": "Internal Error"
}
```

<style>
  .md-content__button {
    display: none;
  }
</style>