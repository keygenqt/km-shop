import { v4 as uuidv4 } from 'uuid';
import {ResponseException} from "./mappers/ResponseExceptionMapper";
// mappers
export * from './mappers/ResponseExceptionMapper';

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
                if (e instanceof ResponseException) {
                    Helper.sendEvent(caller, e.mapToException())
                } else {
                    Helper.sendEvent(caller, e)
                }
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