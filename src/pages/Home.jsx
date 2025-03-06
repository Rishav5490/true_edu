import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

const Home = () => {
  return (
    <>
    <div className='bg-blue-950 text-white p-4'>
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
    <div> <hr />
    </div>
   
    <div> <Navbar /></div>
   
    </>
  )
}

export default Home
