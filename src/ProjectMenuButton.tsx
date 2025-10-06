import {useState} from 'react'
import ProjectMenu from "./ProjectMenu.tsx";
import {getUserId, postRequest} from "./util.tsx";
import type {OpenProjectRequest, OpenProjectResponse, Project, ProjectListRequest} from "./types.ts";


interface ProjectMenuButtonProps {
    name: string
}

const ProjectMenuButton = ({ name }: ProjectMenuButtonProps) => {
    const [menuOpen, menuSetOpen] = useState(false);
    const [projects, setProjects] = useState<Project[]>([]);

    const projectsListRequest = async () => {
        const projectList = await postRequest<ProjectListRequest, Project[]>(
            "http://localhost:3000/open-project-list",
            {
                user_id: getUserId(),
                template_link: window.location.href
            }
        );

        setProjects(projectList);
        menuSetOpen(true);
    }

    const openProjectRequest = async(projectId: string) => {
        const project = await postRequest<OpenProjectRequest, OpenProjectResponse>(
            "http://localhost:3000/open-project",
            { id: projectId }
        );

        const tierContainer = document.getElementById("tier-container");
        if (tierContainer) {
            tierContainer.innerHTML = project.tier_rows_html;
        }
        const imageCarousel = document.getElementById("create-image-carousel");
        if (imageCarousel) {
            imageCarousel.innerHTML = project.image_carousel_html;
        }

        menuSetOpen(false);
    };

    return (
        <>
            <button className="bg-purple-600 text-white z-[999999] w-[20vw] h-[10vh] text-[3vh]" onClick={projectsListRequest}>
                {name}
            </button>
            <ProjectMenu projects={projects} menuOpen={menuOpen} menuSetOpen={menuSetOpen} openProjectRequest={openProjectRequest} />
        </>
    )
}

export default ProjectMenuButton
