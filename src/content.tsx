import ReactDOM from 'react-dom/client'
import contentStyles from './content.css?inline'
import React from "react";
import Container from "./Container.tsx";



const container = document.createElement('div');
container.id = 'shared-tier-list-extension-root';
container.style.cssText = `
    display: flex;
    justify-content: center;
    padding: 0px 0px 20px 0px;
`;

document.body.appendChild(container);

const shadowRoot = container.attachShadow({ mode: 'open' });

const styleSheet = document.createElement('style');
styleSheet.textContent = contentStyles;
shadowRoot.appendChild(styleSheet);

const appContainer = document.createElement('div');
shadowRoot.appendChild(appContainer);

// TODO make this wss instead of ws
const ws = new WebSocket("ws://localhost:3000/ws");

// TODO add proper handling
ws.onopen = () => {
    console.log("Opened!")
}

ws.onmessage = (e) => {
    console.log(e.data)
}

ReactDOM.createRoot(appContainer).render(
    <React.StrictMode>
        <Container ws={ws}/>
    </React.StrictMode>
);
