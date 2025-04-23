import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Translate from './Translate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Translate />
  </StrictMode>,
)
