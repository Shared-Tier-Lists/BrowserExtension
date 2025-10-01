import React from 'react'
import ReactDOM from 'react-dom/client'
import DK from './DK.tsx'

// Create a container for your React app
const container = document.createElement('div')
container.id = 'my-extension-root'
document.body.appendChild(container)

// Create shadow DOM to isolate styles
const shadowRoot = container.attachShadow({ mode: 'open' })
const shadowContainer = document.createElement('div')
shadowRoot.appendChild(shadowContainer)

// Optional: Inject styles into shadow DOM
const style = document.createElement('style')
style.textContent = `
  /* Your styles here */
`
shadowRoot.appendChild(style)

// Render React app
ReactDOM.createRoot(shadowContainer).render(
    <React.StrictMode>
        <DK />
    </React.StrictMode>
)