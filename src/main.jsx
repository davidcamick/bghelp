import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HighEvent from './HighEvent.jsx'
import LowEvent from './LowEvent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/highevent" element={<HighEvent />} />
        <Route path="/lowevent" element={<LowEvent />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
