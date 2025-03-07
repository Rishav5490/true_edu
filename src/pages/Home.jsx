import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/navbar/HeroSection'

const Home = () => {
  return (
    <>
    <div className='bg-blue-900 text-white px-20 py-3'>
      <div className='flex justify-between items-center flex-wrap'>
      <h6 className='uppercase font-normal'>Create a brighter future by turning the pages of <u>Our books</u> and shape your tomorrow.</h6>
      <div>
      <Link to="/" className='capitalize font-light  text-center'>📱 Get App</Link> | 
      <Link to="/" className='capitalize font-light  text-center'>🕸 visit Store</Link>
      
      </div>
      </div>
      <div>
     
        </div>
    </div>
    
   
    <div>
       <Navbar />
       <HeroSection />
    </div>
   
    </>
  )
}

export default Home
