import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import woman from "/woman-object.png";


const OtpLogin = () => {

    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState(60); // 1 minutes countdown

    useEffect(() =>{
        if(timer >0){
            const interval = setInterval(() => setTimer((prev) => prev -1), 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const handleChange = (index, value) =>{
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.slice(-1); // Allow only one dight
        setOtp(newOtp);

        if (value && index < otp.length -1){
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    const handleVerifyOTP = () => {
        alert(`Otp Entered : ${otp.join("")}`);
    };

    const handleResendOTP = ()=>{
        setOtp(["", "", "", ""]);
        setTimer(60);
    };


  return (
    <div className="flex justify-center items-center h-100vh bg-gray-100 p-4">
         <div className="hidden md:block w-1/2 max-w-md">
    <img src={woman} alt="woman-object-working" className="w-full shadow-lg w-full max-w-md" />
    </div>
             
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">Login/Signup with OTP</h2>
      <p className="text-gray-500 text-center text-sm mb-4">
        We have sent the verification code to your mobile number <br />
        <span className="font-semibold">+91 8295-017183</span> <span className="text-blue-900 font-semibold cursor-pointer">Change</span>
      </p>
      <div className="flex justify-center space-x-2 mb-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            maxLength="1"
            className="w-12 h-12 text-center border rounded-md text-xl focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
      <p className="text-center text-gray-600 text-sm mb-4">
        {timer > 0 ? `${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, "0")}` : "00:00"}
      </p>
      <button
        onClick={handleVerifyOTP}
        className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-700"
      >
        <Link to='/profile'>Verify OTP</Link>
      </button>
      <p className="text-center text-sm text-gray-500 mt-4">
        Didn't receive the code? {timer === 0 && (
          <span
            className="text-blue-900 font-semibold cursor-pointer"
            onClick={handleResendOTP}
          >
            Resend OTP...
          </span>
        )}
      </p>
    </div>
  </div>
  
  )
};

export default OtpLogin;
