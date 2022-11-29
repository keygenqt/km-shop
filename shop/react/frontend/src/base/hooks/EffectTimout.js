import {useEffect} from "react";
import {MD5} from "crypto-js";

let timeoutIDs = {}

/**
 * Timeout cansel multiple query
 */
export function useEffectTimout(create, deps = [], before = () => {}, ms = 500, key = null) {
    useEffect(() => {
        before()
        const timeoutID = key ? key : MD5(create.toString()).toString()
        clearTimeout(timeoutIDs[timeoutID])
        timeoutIDs[timeoutID] = setTimeout(async () => {
            await create()
        }, ms)
    }, deps)
}