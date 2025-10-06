import ProjectGridView from "./ProjectGridView.tsx";
import type {Project} from "./types.ts";
import React, {type Dispatch} from "react";


interface ProjectMenuProps {
    menuOpen: boolean
    menuSetOpen: Dispatch<React.SetStateAction<boolean>>
    projects: Project[]
    openProjectRequest: (projectId: string) => Promise<void>
}

const ProjectMenu = ({ projects, menuOpen, menuSetOpen, openProjectRequest }: ProjectMenuProps) => {

    if (!menuOpen) return null;

    return (
        <div className="
            fixed
            top-1/2
            left-1/2
            transform
            -translate-x-1/2
            -translate-y-1/2
            bg-white border-[2px]
            border-[#333] p-[16px] rounded-[8px]
            shadow-[0_4px_12px_rgba(0,0,0,0.15)]
            z-[999999]
            w-[50%]
            h-[50%]
            text-center
        ">
            <ProjectGridView projects={projects} openProjectRequest={openProjectRequest} />
            <button onClick={() => menuSetOpen(false)}>Close</button>
        </div>

    );
};

export default ProjectMenu;
