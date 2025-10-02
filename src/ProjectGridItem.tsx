import { apiRequest } from "./util.ts";


interface ProjectGridItemProps {
    name: string;
    id: string
}

interface OpenProjectRequest {
    id: string
}

interface OpenProjectResponse {
    tier_rows_html: string
    image_carousel_html: string
}

async function submitOpenProjectRequest(project: OpenProjectRequest) {
    return apiRequest<OpenProjectRequest, OpenProjectResponse>(
        "http://localhost:3000/open-project",
        "POST",
        project
    );
}

const ProjectGridItem = ({ name, id }: ProjectGridItemProps) => {
    return (
        <div className="h-25 bg-blue-200"
            onClick={
                async () => {
                    let response = await submitOpenProjectRequest({
                        id: id
                    });

                    const tierContainer = document.getElementById("tier-container");
                    if (tierContainer) {
                        tierContainer.innerHTML = response.tier_rows_html;
                    }
                    const image_carousel = document.getElementById("create-image-carousel");
                    if (image_carousel) {
                        image_carousel.innerHTML = response.image_carousel_html;
                    }
             }}

        >{name}</div>
    );
};

export default ProjectGridItem
