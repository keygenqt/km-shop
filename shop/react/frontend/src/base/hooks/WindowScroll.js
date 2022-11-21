import {useLayoutEffect, useState} from 'react';

/**
 * Get windows size
 *
 * @returns {{x: number, y: number}}
 */
export function useWindowScroll(effect = undefined) {

    const [position, setPosition] = useState({
        x: window.scrollX,
        y: window.scrollY,
        scrollWidth: window.scrollWidth,
        scrollHeight: window.scrollHeight
    });

    useLayoutEffect(() => {

        const el = document.getElementById("pageSelection")

        const handleWindowScroll = () => {

            const result = {
                x: el.scrollLeft,
                y: el.scrollTop,
                scrollWidth: el.scrollWidth,
                scrollHeight: el.scrollHeight,
            }

            setPosition(result);

            if (effect !== undefined) {
                effect(result)
            }
        };
        el.addEventListener('scroll', handleWindowScroll);
        return () => {
            el.removeEventListener('scroll', handleWindowScroll);
        };
    });

    return position;
}
