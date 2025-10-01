import React from "react";


const ProjectGridView: React.FC = () => {
    return (
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(8rem,1fr))] gap-4 p-4">
            <div className="h-25 bg-blue-200">1</div>
            <div className="h-25 bg-blue-200">2</div>
            <div className="h-25 bg-blue-200">3</div>
            <div className="h-25 bg-blue-200">4</div>
            <div className="h-25 bg-blue-200">5</div>
        </div>
    )
}

export default ProjectGridView