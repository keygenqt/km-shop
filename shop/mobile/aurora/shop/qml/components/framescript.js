addEventListener("DOMContentLoaded", function (aEvent) {
    aEvent.originalTarget.addEventListener("framescript:log",
        function (aEvent) {
            sendAsyncMessage("webview:action", aEvent.detail)
    });
});
