import React from 'react'
import ReactDOM from 'react-dom/client'
import ProjectMenuButton from './ProjectMenuButton.tsx'

// Create a container for your React app
const container = document.createElement('div')
container.id = 'my-extension-root'


const shareButtons = document.getElementById('outer-share')

console.log(shareButtons)

if (shareButtons && shareButtons.parentNode) {
    shareButtons.parentNode.insertBefore(container, shareButtons);
}

// Render React app
ReactDOM.createRoot(container).render(
    <React.StrictMode>
        <ProjectMenuButton name={"DK WON"} />
    </React.StrictMode>
)