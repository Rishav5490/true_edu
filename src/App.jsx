import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PublishWithUs from './pages/PublishWithUs';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import PolicyPrivacy from './pages/PolicyPrivacy';
import ExploreBooks from './pages/ExploreBooks';
import Cart from './pages/Cart';
import Otp from './pages/Otp';
import ProfileForm from './pages/ProfileForm';
import  LogIn  from './pages/LogIn';


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
          <Route path="/signup" element={<SignUp />} />  
          <Route path="/otp" element ={<Otp />} />
          <Route path="/profile" element ={<ProfileForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/policy" element={<PolicyPrivacy />} />
          <Route path="/privacy" element={<PolicyPrivacy />} />
          <Route path="/ourbooks" element={<ExploreBooks />} />
          <Route path="/login" element={<LogIn />} />


       
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App ;

