import React from 'react'

const Footer = () => {
  return (
    
      <footer className="bg-blue-900 text-white px-20 py-5 mt-10">
        <div className="container mx-auto flex justify-evenly ">
          <div className="">
            <h3 className="text-xl font-bold">True-Edu Publications</h3>
            <p className="text-sm text-gray-300 mt-4">Lorem ipsum is placeholder textbr
                 commonly used in the graphic, print, and publishing industries <br />for previewing layouts and visual mockups.</p>
             <button>❎</button>
             <button>🌝</button>
             <button>🔗</button>
             <button>🌌</button>
          </div>
          <div className=' '>
            <h3 className="font-bold">Company</h3>
            <ul className="mt-2 space-y-1 flex gap-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Where to Buy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Publish With Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQ's</a></li>
            </ul>
          
          <div>
            <h3 className="font-bold">Contact Us</h3>
            <p className="text-gray-300">📞 8295-017183</p>
            <p className="text-gray-300">📧 trueedu@info.com</p>
          </div>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm mt-4">© Copyright 2024, All Rights Reserved by TrueEdu Publications</p>
      </footer>
      
    
  )
}

export default Footer
