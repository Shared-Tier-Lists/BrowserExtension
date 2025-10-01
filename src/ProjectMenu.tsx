import React from 'react';

interface ProjectMenuProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ProjectMenu = ({ open, setOpen }: ProjectMenuProps) => {

    if (!open) return null;

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
            <strong>🍌 Donkey Kong says hi!</strong>
            <p>This is a React popup injected into the page.</p>
            <button onClick={() => setOpen(false)}>Close</button>
        </div>

    );
};

export default ProjectMenu;
