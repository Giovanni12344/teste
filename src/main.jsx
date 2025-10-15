import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router'
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/teste'>
    <Routes>
      <Route index element={<Home />}/>
      <Route path='Sobre' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
