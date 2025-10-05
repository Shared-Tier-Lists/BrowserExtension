import ProjectMenuButton from "./ProjectMenuButton.tsx";
import {createPortal} from "react-dom";
import {useEffect, useState} from "react";
import {useDebouncedCallback} from "use-debounce";
import useMutationObserver from "./useMutationObserver.tsx";

interface ContainerProps {
    ws: WebSocket
}

const mutationOptions = {
    childList: true,
    characterData: true,
    attributes: true,
    subtree: true
}

const Container = ({ ws }: ContainerProps) => {

    const [shareButtons, setShareButtons] = useState<HTMLElement | null>(null);
    const [tierContainer, setTierContainer] = useState<HTMLElement | null>(null);
    const [imageCarousel, setImageCarousel] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const shareElem = document.getElementById('outer-share');
        const tierElem = document.getElementById('tier-container');
        const imageCarouselElem = document.getElementById('create-image-carousel');

        setShareButtons(shareElem);
        setTierContainer(tierElem);
        setImageCarousel(imageCarouselElem);
    }, []);

    const sendSync = useDebouncedCallback(() => {

        if (!tierContainer || !imageCarousel) return;

        ws.send(JSON.stringify({
            // TODO specify user here and any other necessary props
            tier_container_html: tierContainer.getHTML(),
            image_carousel: imageCarousel.getHTML(),
        }));
    }, 500)


    useMutationObserver(
        tierContainer,
        (mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList' || mutation.type === 'characterData' || mutation.type === 'attributes') {
                    sendSync();
                }
            }
        },
        mutationOptions
    )

    useMutationObserver(
        imageCarousel,
        (mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList' || mutation.type === 'characterData' || mutation.type === 'attributes') {
                    sendSync();
                }
            }
        },
        mutationOptions
    )

    return (
        (shareButtons && createPortal(<ProjectMenuButton name={"Open Project"} />, shareButtons))
    )
}


export default Container;