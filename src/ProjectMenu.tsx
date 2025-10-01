// src/content/DKPopup.tsx
import React from 'react';

interface ProjectMenuProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ProjectMenu = ({ open, setOpen }: ProjectMenuProps) => {

    if (!open) return null;

    return (
        <div style={{
            // position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: 'white',
            border: '2px solid #333',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 10000,
            width: '250px'
        }}>
            <strong>🍌 Donkey Kong says hi!</strong>
            <p>This is a React popup injected into the page.</p>
            <button onClick={() => setOpen(false)}>Close</button>
        </div>
    );
};

export default ProjectMenu;
