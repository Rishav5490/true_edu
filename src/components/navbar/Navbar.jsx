import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='bg-sky-100 text-cyan p-4 flex justify-evenly items-center'>
    <figure>
        <img src="../src/assets/logo.png" alt="logo" title='TRUE-EDUCATION' />
    </figure>
    <div className=''>
    <ul className='flex justify-between items-center gap-8 flex-wrap '>
        <li className='hover:bg-sky-300   rounded-xl '>
          <Link to="#">Publish With US</Link>
        </li>
        <li className='hover:bg-sky-300   rounded-xl '>
          <Link to="#">Where to Buy</Link>
        </li>
        <li  className='hover:bg-sky-300   rounded-xl '>
          <Link to="#">About Us</Link>
        </li> 
        <li  className='hover:bg-sky-300   rounded-xl '>
          <Link to="#">Contact Us</Link>
        </li>
        </ul>

        </div>
        <div className='flex justify-end items-center  gap-4'>
        
            <Link to="#"><input type="search"placeholder='🔍 Search Book' className='border-2 rounded-sm bg-white text-gray-400' /></Link>
            <Link to="#"><button className='border-2 rounded-sm bg-white-950 text-gray-400'>🛒</button></Link>
            <Link to="#"><button className='border-2 rounded-sm bg-blue-950 text-gray-400'>SIGN IN</button></Link>
        
        </div>
   </nav>
  )
}

export default Navbar
