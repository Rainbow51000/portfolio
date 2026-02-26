import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Function that scrolls back to the top if the user changes path.
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
}
