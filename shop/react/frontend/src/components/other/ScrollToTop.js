import {useEffect} from "react";
import {useLocation} from "react-router-dom";

/**
 * Component for scroll to top if change location
 */
export function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        const el = document.getElementById("root")
        el.scrollTo(0, 0);
    }, [pathname]);

    return null;
}