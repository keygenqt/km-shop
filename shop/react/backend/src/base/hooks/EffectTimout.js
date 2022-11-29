import {useEffect} from "react";

let timeoutIDs = {}

/**
 * Timeout cansel multiple query
 */
export function useEffectTimout(key, create, deps = [], before = () => {}, ms = 500) {
    useEffect(() => {
        before()
        clearTimeout(timeoutIDs[key])
        timeoutIDs[key] = setTimeout(async () => {
            await create()
        }, ms)
    }, deps)
}