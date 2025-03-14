import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/navbar/HeroSection'
import Footer from '../components/navbar/Footer'
import Header from '../components/header/Header'
import AboutSection from '../components/aboutSection/AboutSection'
import ContactSection from '../components/contactSection/ContactSection'
import PrivacyPolicy from '../components/privacy policy/PrivacyPolicy'
import PublishSection from '../components/PublishSection/PublishSection'
import OurBooks from '../components/ourbookSection/OurBooks'

const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <PublishSection />
      <AboutSection />
      <ContactSection />
      <PrivacyPolicy />
      <OurBooks />

      <Footer />
    </div>
  )
}

export default Layout
