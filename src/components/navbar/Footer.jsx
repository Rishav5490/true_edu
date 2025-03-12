import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { MdMail, MdCall } from "react-icons/md";

const Footer = () => {
  return (

    <footer className="bg-gradient-to-b from-blue-800 to-blue-900 text-white py-8">
    <div className="max-w-6xl mx-auto px-6 md:flex md:justify-between md:items-start">
      {/* Left Section */}
      <div className="md:w-1/3 text-center md:text-left">
        <h2 className="text-2xl font-bold">True-Edu <span className="text-gray-300">Publications</span></h2>
        <p className="text-gray-300 mt-2 text-sm">
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <FaXTwitter className="w-6 h-6 cursor-pointer hover:text-gray-400" />
          <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-gray-400" />
          <FaLinkedinIn className="w-6 h-6 cursor-pointer hover:text-gray-400" />
          <FaGithub className="w-6 h-6 cursor-pointer hover:text-gray-400" />
        </div>
      </div>

      {/* Middle Section */}
      <div className="md:w-1/3 mt-6 md:mt-0 text-center md:text-left">
        <h3 className="text-lg font-semibold">Company</h3>
        <ul className="text-gray-300 text-sm mt-2 space-y-1">
          <li><a href="#" className="hover:text-gray-400">Where to Buy</a></li>
          <li><a href="#" className="hover:text-gray-400">Publish With Us</a></li>
          <li><a href="#" className="hover:text-gray-400">About Us</a></li>
          <li><a href="#" className="hover:text-gray-400">Our Team</a></li>
          <li><a href="#" className="hover:text-gray-400">FAQ's</a></li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="md:w-1/3 mt-6 md:mt-0 text-center md:text-left">
        <h3 className="text-lg font-semibold">Contact Us</h3>
        <div className="text-gray-300 text-sm mt-2">
          <p className="flex items-center justify-center md:justify-start space-x-2">
            <MdCall /> <span>8295-017183</span>
          </p>
          <p className="flex items-center justify-center md:justify-start space-x-2 mt-1">
            <MdMail /> <span>trueedu@info.com</span>
          </p>
        </div>
      </div>
    </div>
    {/* Footer Bottom */}
    <div className="border-t border-gray-600 mt-6 pt-4 text-center text-gray-400 text-sm">
      <p>© Copyright 2024, All Rights Reserved by TrueEdu Publications</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-gray-300">Terms & Conditions</a>
        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
      </div>
    </div>
  </footer>
    
      
    
  )
}

export default Footer
