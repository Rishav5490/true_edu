import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { MdMail, MdCall } from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

    // -----------Footer Section----------------
<footer className="bg-gradient-to-b from-blue-900 to-blue-900 text-white py-10 px-6 md:px-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-6">
     {/* Left Section */}

        <div>
          <h2 className="text-2xl font-bold">True-Edu <span className="block text-lg font-light">Publications</span></h2>
          <p className="mt-3 text-sm max-w-sm">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
          <div className="flex gap-4 mt-4">
            <FaXTwitter className="text-xl cursor-pointer hover:text-gray-400" />
            <FaFacebookF className="text-xl cursor-pointer hover:text-gray-400" />
            <FaLinkedinIn className="text-xl cursor-pointer hover:text-gray-400" />
            <FaGithub className="text-xl cursor-pointer hover:text-gray-400" />
          </div>
        </div>

     {/* Middle Section */}

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className=" text-lg font-semibold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li className="hover:underline cursor-pointer"><Link to="">Where to Buy</Link></li>
              <li className="hover:underline cursor-pointer"><Link to="/publish">Publish With Us</Link></li>
              <li className="hover:underline cursor-pointer"><Link to="/about">About Us</Link></li>
              <li className="hover:underline cursor-pointer"><Link to="">Our Team</Link></li>
              <li className="hover:underline cursor-pointer"><Link to="">FAQ's</Link></li>
            </ul>
          </div>

     {/* Right Section */}

          <div className="md:w-1/3 mt-6 md:mt-0 text-center md:text-left">
         <h3 className="text-lg font-semibold"> <Link to="">Contact Us</Link></h3>
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
      </div>
      <div className="border-t border-gray-500 mt-6 pt-4 text-center text-sm">
        <p>© Copyright 2024, All Rights Reserved by TrueEdu Publications</p>
        <div className="flex justify-center gap-6 mt-2">
          <span className="hover:underline cursor-pointer"><Link to="">Terms & Conditions</Link></span>
          <span className="hover:underline cursor-pointer"><Link to ="/privacy">Privacy Policy</Link></span>
        </div>
      </div>
    </footer>
  
    
      
  )
}

export default Footer
