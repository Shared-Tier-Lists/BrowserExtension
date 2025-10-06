import ProjectMenuButton from "./ProjectMenuButton.tsx";
import {createPortal} from "react-dom";
import {useEffect, useState} from "react";
import {useDebouncedCallback} from "use-debounce";
import useMutationObserver from "./useMutationObserver.tsx";
import {type Project} from "./types.ts";
import {getUserId} from "./util.tsx";

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
    // todo set current project
    const [currentProject, setCurrentProject] = useState<Project | null>(null);

    useEffect(() => {
        const shareElem = document.getElementById('outer-share');
        const tierElem = document.getElementById('tier-container');
        const imageCarouselElem = document.getElementById('create-image-carousel');

        setShareButtons(shareElem);
        setTierContainer(tierElem);
        setImageCarousel(imageCarouselElem);
    }, []);

    const sendSync = useDebouncedCallback(() => {

        // TODO remove print
        console.log(setCurrentProject)
        const message = {
            action: "open-project",
            user_id: getUserId(),
            project_id: currentProject?.name,
            tier_container_html: tierContainer?.getHTML(),
            image_carousel_html: imageCarousel?.getHTML(),
        };

        ws.send(JSON.stringify(message));
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