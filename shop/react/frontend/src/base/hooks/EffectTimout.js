import {useEffect} from "react";
import {MD5} from "crypto-js";

let timeoutIDs = []

/**
 * Timeout cansel multiple query
 */
export function useEffectTimout(create, deps = [], before = () => {
}, ms = 1600) {
    useEffect(() => {
        before()
        const key = MD5(create.toString()).toString()
        clearTimeout(timeoutIDs.find((it) => it.key === key)?.val)
        timeoutIDs = timeoutIDs.filter((it) => it.key !== key)
        timeoutIDs.push({
            key: key,
            val: setTimeout(async () => {
                await create()
            }, ms)
        })
    }, deps)
}