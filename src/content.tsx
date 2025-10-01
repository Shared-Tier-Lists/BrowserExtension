import React from 'react'
import ReactDOM from 'react-dom/client'
import ProjectMenuButton from './ProjectMenuButton.tsx'
import contentStyles from './content.css?inline'


const container = document.createElement('div');
container.id = 'shared-tier-list-extension-root';
container.style.cssText = `
    display: flex;
    justify-content: center;
    padding: 0px 0px 20px 0px;
`;

const shareButtons = document.getElementById('outer-share');

if (shareButtons && shareButtons.parentNode) {
    shareButtons.parentNode.insertBefore(container, shareButtons);

    const shadowRoot = container.attachShadow({ mode: 'open' });

    const styleSheet = document.createElement('style');
    styleSheet.textContent = contentStyles;
    shadowRoot.appendChild(styleSheet);

    const appContainer = document.createElement('div');
    shadowRoot.appendChild(appContainer);

    ReactDOM.createRoot(appContainer).render(
        <React.StrictMode>
            <ProjectMenuButton name={"DK WON"} />
        </React.StrictMode>
    );
} else {
    console.warn('No #outer-share element to inject extension');
}
