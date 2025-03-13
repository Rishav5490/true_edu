import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../public/logo.png"

const Navbar = () => {
  return (
   <nav className='bg-sky-100 text-cyan p-4 flex justify-evenly items-center'>
    <figure>
        <img src={logo}alt="logo" title='TRUE-EDUCATION' />
    </figure>
    <div className=''>
    <ul className='flex justify-between items-center gap-8 flex-wrap '>
        <li className='hover:bg-blue-300 transition   rounded-lg '>
          <Link to="/publish">Publish With US</Link>
        </li>
        <li className='hover:bg-blue-300 transition   rounded-lg '>
          <Link to="#">Where to Buy</Link>
        </li>
        <li  className='hover:bg-blue-300 transition   rounded-lg '>
          <Link to="/about">About Us</Link>
        </li> 
        <li  className='hover:bg-blue-300 transition   rounded-lg '>
          <Link to="/contact">Contact Us</Link> 
        </li>
        </ul>

        </div>
        <div className='flex justify-end items-center  gap-4'>
        
            <Link to="#"><input type="search"placeholder='🔍 Search Book' className='  px-2 py-1 border-2-white rounded-lg bg-white text-black hover:bg-blue-700 transition' /></Link>
            <Link to="#"><button className=' px-2 py-1 border-2 rounded-lg bg-blue-900 text-white hover:bg-blue-700 transition'>🛒</button></Link>
            <Link to="/signup"><button className=' px-2 py-2 border-2 rounded-lg bg-blue-900 text-white hover:bg-blue-700 transition'>SIGN IN</button></Link>
        
        </div>
   </nav>
  )
}

export default Navbar;
