import {useEffect} from "react";

let timeoutID

/**
 * Timeout cansel multiple query
 */
export function useEffectTimout(create, deps = [], before = () => {}, ms = 600) {
    useEffect(() => {
        before()
        clearTimeout(timeoutID)
        timeoutID = setTimeout(() => {
            create()
        }, ms)
    }, deps)
}