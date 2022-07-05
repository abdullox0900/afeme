import React, { useState, useCallback, useEffect } from "react";

export default function useResize(myRef) {
    const [elWidth, setElWidth] = useState(0);
    const [elHeight, setElHeight] = useState(0);

    const handleResize = useCallback(() => {
        setElWidth(myRef.current.offsetWidth);
        setElHeight(myRef.current.offsetHeight);
    }, [myRef]);

    useEffect(() => {
        window.addEventListener("load", handleResize);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("load", handleResize);
            window.removeEventListener("resize", handleResize);
        };
    }, [myRef, handleResize]);

    return { elWidth, elHeight };
}
