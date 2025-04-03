import React, { useState } from 'react'
import woman from "/woman-object.png";
import { Link } from 'react-router-dom';

const SignupSection = () => {
    const [mobile, setMobile] = useState({


    });
  
    const handleInputChange = (e) => {
      setMobile(e.target.value);
    };
  
    const requestOTP = () => {
      if (mobile.length === 10) {
        alert(`OTP sent to +91 ${mobile}`);
      } else {
        alert("Please enter a valid 10-digit mobile number.");
      }
    };
  return (
    <>
    {/* updated */}
    <div className="bg-gray-100  flex justify-center items-center p-5">
    <div className="flex flex-col md:flex-row justify-center items-center rounded-lg bg-white p-15 gap-5 " > 
      
      {/* Left Section - Image */}
      <div className="hidden md:block w-1/2 max-w-md">
        <img src={woman} alt="woman-object-working" className="w-full" />
      </div>

      {/* Right Section - OTP Form */}
      <div className="  rounded-lg shadow-lg w-full max-w-lg md:w-1/2 p-6">
        {/* Header with Close Button */}
        <div className="flex justify-between items-center  ">
          <h2 className="text-3xl font-semibold">Login/Signup with OTP</h2>
          <button
            className="text-gray-500 hover:text-red-500 transition"
            onClick={() => alert("Modal Closed")}
          >
            ✕
          </button>
        </div>

        {/* Instruction Text */}
        <p className="text-gray-600 mt-4">Please enter your 10-digit mobile number</p>
        

        {/* Mobile Number Input */}
        <div className="mt-4 flex items-center border rounded-lg">
          <label className="p-3 bg-gray-200 rounded-lg"> +91
          </label>
          <input
            type="tel"
            maxLength="10"
            id='number'
            value={mobile.number}
            onChange={handleInputChange}
            placeholder="Enter your mobile number"
            className="w-full p-2 outline-none"
          />
        </div>

        {/* Helper Text */}
        <p className="text-sm text-gray-500 mt-2">
          We will send a verification code to your phone number
        </p>

        {/* Request OTP Button */}
        <button
          onClick={requestOTP}
          className="w-full mt-6 bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
         <Link to="/otp">Request OTP...</Link> 
        </button>
      </div>
      </div>
    </div>


    
    </>
  )
}

export default SignupSection ;
