import {useEffect} from "react";
import {MD5} from "crypto-js";

let timeoutIDs = {}

/**
 * Timeout cansel multiple query
 */
export function useEffectTimout(create, deps = [], before = () => {
}, ms = 600) {
    useEffect(() => {
        const key = MD5(create.toString()).toString()
        before()
        clearTimeout(timeoutIDs[key])
        timeoutIDs[key] = setTimeout(async () => {
            await create()
        }, ms)
    }, deps)
}