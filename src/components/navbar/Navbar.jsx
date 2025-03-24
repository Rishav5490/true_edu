import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
 

  // !--Navbar Section-->
  <nav className="bg-sky-100 text-cyan p-4 flex justify-evenly items-center shadow-md">
  {/* Logo */}
  <figure>
    <img src={logo} alt="logo" title="TRUE-EDUCATION" className="h-12 w-auto" />
  </figure>
  
  {/* Mobile Menu Button */}
  <button 
    className="md:hidden text-customBlue focus:outline-none"
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? <X size={28} /> : <Menu size={28} />}
  </button>

  {/* Navigation Links */}
  <div className={`md:flex md:items-center md:gap-8 absolute md:static top-16 left-0 w-full bg-sky-100 md:w-auto md:bg-transparent p-4 md:p-0 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
    <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-lg">
      <li className="hover:bg-blue-300 transition rounded-lg p-2">
        <Link to="/publish">Publish With Us</Link>
      </li>
      <li className="hover:bg-blue-300 transition rounded-lg p-2">
        <Link to="/cart">Where to Buy</Link>
      </li>
      <li className="hover:bg-blue-300 transition rounded-lg p-2">
        <Link to="/about">About Us</Link>
      </li>
      <li className="hover:bg-blue-300 transition rounded-lg p-2">
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
  </div>

  {/* Search, Cart & Sign-In Buttons */}
  <div className="hidden md:flex items-center gap-4">
    <input
      type="search"
      placeholder="🔍 Search Book"
      className="px-3 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <Link to="/cart">
      <button className="p-2 border rounded-lg bg-blue-900 text-white hover:bg-blue-700 transition">
        🛒
      </button>
    </Link>
    <Link to="/signup">
      <button className="px-4 py-2 border rounded-lg bg-blue-900 text-white hover:bg-blue-700 transition">
        SIGN IN
      </button>
    </Link>
  </div>
</nav>
  )
}

export default Navbar ;
