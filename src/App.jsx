import React from 'react'
import{Link} from 'react-router-dom'  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PublishWithUs from './pages/PublishWithUs';
import ContactUs from './pages/ContactUs';
const App = () => {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/publish" element={<PublishWithUs />} /> 
          <Route path="/contact" element={<ContactUs />} /> 
       
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
