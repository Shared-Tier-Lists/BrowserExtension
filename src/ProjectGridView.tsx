import React from "react";
import ProjectGridItem from "./ProjectGridItem.tsx";

const ProjectGridView: React.FC = () => {
    return (
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(8rem,1fr))] gap-4 p-4">
            <ProjectGridItem name={"0"} id={"68d8958bca4a3ed28ee04180"} />
        </div>
    )
}

export default ProjectGridView