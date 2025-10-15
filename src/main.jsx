import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './performance-optimizations.css'
import App from './App.jsx'

// Import animations after React is loaded
import('./animations.js').catch(console.error);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
