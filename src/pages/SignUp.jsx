import React from 'react'
import Header from '../components/header/Header'
import woman from "../../public/woman-object.png"

const SignUp = () => {
  return (
    <>
    <div>
        <Header />
        {/* <Navbar /> */}
    </div>
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-smoke bg-opacity-50">
        <div>
            <img src={woman} alt="woman-object-working" />
        </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-semibold">Login/Signup with OTP</h2>
          <button >
          </button>
        </div>

        <p className="text-gray-600 mt-4">Please enter your 10 digit mobile number</p>
        
        <div className="mt-4 flex items-center border rounded-lg ">
          <span className="px-4 py-2 bg-gray-200">🇮🇳 +91</span>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            value=""
            onChange=""
            className="w-full p-2 outline-none"
          />
        </div>

        <p className="text-sm text-gray-500 mt-2">
          We will send a verification code via your phone number
        </p>

        <button
          className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Request OTP
        </button>
      </div>
    </div>
    </div>
    </>
  )
}

export default SignUp
