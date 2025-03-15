import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
  <div className='bg-blue-900 text-white px-20 py-3'>
      <div className='flex justify-between items-center flex-wrap'>
      <h6 className='uppercase font-normal'> 

        Create a brighter future by turning the pages of <u>Our books</u> and shape your tomorrow.</h6>
      <div className='flex gap-4'>
      <Link to="/" className=' border rounded-md capitalize font-light  text-center'>📱 Get App</Link> 
      <Link to="/" className=' border rounded-md capitalize font-light  text-center'>🕸 visit Store</Link> 
      <button  className='border rounded-md capitalize font-light  text-center '> <Link to="/"> 🔙back</Link></button>  
      </div>
      </div>
      </div> 
    </>
  )
}

export default Header ;
