import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import MindMap from './pages/MindMap'
import Create from './pages/Create'
import WorldMap from './pages/WorldMap'
import Timeline from './pages/Timeline'
import Storylines from './pages/Storylines'
function App() {
  const [count, setCount] = useState(0)

  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mindmap" element={<MindMap />} />
        <Route path="/create" element={<Create />} />
        <Route path="/worldmap" element={<WorldMap />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/storylines" element={<Storylines />} />
      </Routes>
    </BrowserRouter> 
    
  )
}

export default App
