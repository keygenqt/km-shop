export const Helper = {
    randomUUID: function () {
        return `${Date.now()}-${Math.round(Math.random() * 1000)}`;
    },
    sendEvent: function (caller, response) {
        const customEvent = new CustomEvent("framescript:log", {detail: {
                response: response,
                caller: caller
            }});
        document.dispatchEvent(customEvent);
    }
}