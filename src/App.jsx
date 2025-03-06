import React from 'react'
import{Link} from 'react-router-dom'  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/home';
import About from './pages/About';
const App = () => {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/layout" element={<Layout />} />
       
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
