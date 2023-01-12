import { v4 as uuidv4 } from 'uuid';

export const Helper = {
    randomUUID: function () {
        return uuidv4()
    },
    request: function (fun, callback, delay) {
        const caller = Helper.randomUUID()
        setTimeout(async () => {
            try {
                Helper.sendEvent(caller, callback(await fun()))
            } catch (e) {
                Helper.sendEvent(caller, e)
            }
        }, delay)
        return caller
    },
    sendEvent: function (caller, response) {
        const customEvent = new CustomEvent("framescript:log", {detail: {
                response: response,
                caller: caller
            }});
        document.dispatchEvent(customEvent);
    },
}