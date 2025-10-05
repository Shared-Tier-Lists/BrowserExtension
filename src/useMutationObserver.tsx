import {useEffect} from "react";

const useMutationObserver = (
    value: HTMLElement | null,
    callback: MutationCallback,
    options = {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
    }
) => {
    useEffect(() => {
        if (value) {
            const observer = new MutationObserver(callback);
            observer.observe(value, options);
            return () => observer.disconnect();
        }
    }, [callback, options, value]);
};

export default useMutationObserver;