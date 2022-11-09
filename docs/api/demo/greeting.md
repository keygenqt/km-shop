Page Greeting
===================

Multiplatform demonstration

<img style="max-height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f536.png"/> &nbsp;
Method: <code>GET</code>

```
/greeting
```

<b>Code samples</b>

```
await fetch('/greeting', {
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

<img style="max-height: 13px;" src="https://github.githubassets.com/images/icons/emoji/unicode/1f197.png"/> &nbsp;
<b>Status: 200</b>

```
Greeting: Hello, JVM!
```

<style>
  .md-content__button {
    display: none;
  }
</style>