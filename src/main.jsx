import React from 'react'
import { createRoot } from 'react-dom/client'
import AppContainer from './AppContainer.jsx'
import './style.css'

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
)
