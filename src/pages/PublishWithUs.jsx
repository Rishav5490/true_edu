import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import PublishSection from '../components/PublishSection/PublishSection';
import Footer from '../components/navbar/Footer';

const PublishWithUs = () => {
  return (
   <>
      <div>
        <Header />
        <Navbar />
        <PublishSection />
        <Footer />
      </div>

   </>
  )
}

export default PublishWithUs ;
