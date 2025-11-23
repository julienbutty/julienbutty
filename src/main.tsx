/**
 * Application entry point
 * Initializes React and renders the App component
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './styles/index.css'

// Get root element
const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

// Create root and render app
createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
)
