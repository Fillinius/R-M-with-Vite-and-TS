import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/R-M-with-Vite-and-TS/">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
