import {useState} from 'react'
import ProjectMenu from "./ProjectMenu.tsx";


interface ProjectMenuProps {
    name: string
}

const ProjectMenuButton = ({ name }: ProjectMenuProps) => {

    const [popupOpen, setPopupOpen] = useState(false)

    return (
        <>
            <button onClick={() => setPopupOpen(true)}>
                {name}
            </button>
            <ProjectMenu open={popupOpen} setOpen={setPopupOpen} />
        </>
    )
}

export default ProjectMenuButton