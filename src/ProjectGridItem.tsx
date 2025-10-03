interface ProjectGridItemProps {
    id: string
    name: string;
    openProjectRequest: (projectId: string) => Promise<void>
}

const ProjectGridItem = ({ id, name, openProjectRequest }: ProjectGridItemProps) => {
    // const [loading, setLoading] = useState(false);
    // console.log(loading);
    console.log("IDEnt:", id);

    return (
        <div className="h-25 bg-blue-200" onClick={() => openProjectRequest(id)}>{name}</div>
    );
};

export default ProjectGridItem
