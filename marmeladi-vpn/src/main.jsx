import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ParticlesBackground from './components/Parcticle/Parcticles.jsx'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ParticlesBackground />
  </StrictMode>,
)
  