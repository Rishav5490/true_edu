import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/navbar/HeroSection'
import Footer from '../components/navbar/Footer'
import Header from '../components/navbar/Header'

const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default Layout
