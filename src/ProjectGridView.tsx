import ProjectGridItem from "./ProjectGridItem.tsx";
import type {Project} from "./types.ts";


interface ProjectGridViewProps {
    projects: Project[]
    openProjectRequest: (projectId: string) => Promise<void>
}

const ProjectGridView = ({ projects, openProjectRequest }: ProjectGridViewProps) => {
    return (
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(8rem,1fr))] gap-4 p-4">
            {projects.map((project) => (
                <ProjectGridItem name={project.name} id={project.id} openProjectRequest={openProjectRequest} />
            ))}
        </div>
    )
}

export default ProjectGridView