import React from 'react'
import objpolicy from "/object-policy.png"

const PrivacyPolicy = () => {
  return (
    <>
    
   <div className="flex flex-col md:flex-row items-center justify-between  px-45 py-28 bg-blue-50   ">
           <div className="md:w-xl text-center md:text-left">
        <h3 className='text-blue-800 text-bold mb-5'>Privacy Policy</h3>

             <h1 className="text-4xl font-bold text-gray-900">
             Your Privacy, Our Priority
             </h1>
             <p className="text-gray-600 mt-8">
               {" "}
               At True-Edu, we prioritize the privacy and security of our users. This Privacy Policy outlines how we collect, use, and protect your information when you access eBooks through our mobile app (“True-Edu”, “we”, “us”, or “our”). By using True-Edu, you agree to the terms outlined in this policy.
             </p>
            
           </div>
           <div className=" flex justify-center mt-10 md:mt-0">
             <img
               src={objpolicy}
               alt="Publish-Books Illustration"
               className="w-full max-w-md "
             />
           </div>
         </div>
         <section className="bg-smoke-100 p-6 md:p-12 rounded-xl shadow-lg max-w-5xl mx-auto my-10">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mt-2">
        1. Information We Collect
        </h2>
        <div className="text-gray-700 mt-4 ">
        <p >
        When using True-Edu, we collect the following personal information to provide you with the best possible experience:
        </p>
        </div>

       <div>
          <div  className="flex items-start space-x-3 mt-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">Full Name</p>
        </div>
        <div  className="flex items-start space-x-3 mt-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">Gender</p>
        </div>
        <div  className="flex items-start space-x-3 mt-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">Board/University</p>
        </div>
        <div  className="flex items-start space-x-3 mt-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">Course</p>
        </div>
        <div  className="flex items-start space-x-3 mt-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">Trade</p>
        </div>
        <div  className="flex items-start space-x-3 mt-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">College</p>
        </div>
        <div  className="flex items-start space-x-3 mt-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">Semester</p>
        </div>
        <div  className="flex items-start space-x-3 mt-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">Mobile Number</p>
        </div>

        <div className='mt-6 text-gray-700'>
        <p>This information is essential for creating your account and personalizing your experience on True-Edu.</p>
        </div>
        </div>
        {/* ----------------2---------------- */}
        <div className="mt-6">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mt-2">2. OTP-Based Login & SMS Permissions</h2>
          <h3 className="font-semibold text-gray-900 mt-5">
          2.1 OTP Verification
          </h3>
          <p className="text-gray-700 mt-5">
          For hassle-free account access, we use an OTP (One-Time Password) verification system. You can log in securely by verifying the OTP sent to your mobile number.
          </p>
          <h3 className="font-semibold text-gray-900 mt-5">
          2.2 SMS View Permissions
          </h3>
          <p className="text-gray-700 mt-5">
          To make the verification process seamless, True-Edu requires SMS view permissions. This allows us to read the OTP automatically, simplifying your login process. We only use this permission to read the OTP for verification purposes. We do not access or store any other messages or data.
          </p>
          <h3 className="font-semibold text-gray-900 mt-5">
          2.3 Security
          </h3>
          <p className="text-gray-700 mt-5">
          OTP verification is essential to protect against unauthorized logins and ensure the security of your account.
          </p>
        </div>
        {/* -----------3-------------- */}
        <div className="mt-6">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mt-2">3. Book Purchases and Subscription Policy</h2>
          <h3 className="font-semibold text-gray-900 mt-5">
          3.1 Paid Books
          </h3>
          <p className="text-gray-700 mt-5">
          To access the full content of eBooks, you must purchase them directly through the True-Edu mobile app. Please note that all purchases are final, and there are no refunds for any book purchases.
          </p>
          <h3 className="font-semibold text-gray-900 mt-5">
          3.2 Free Trial and Subscription
          </h3>
          <p className="text-gray-700 mt-5">
          We offer a free one-week trial for selected books upon subscribing for just ₹1. After the trial period, your subscription will automatically continue, and the full amount of your selected subscription will be deducted from your payment method. You can cancel the subscription at any time during the trial period to avoid being charged further.
          </p>
          
        </div>
        {/* -------------------4----------------- */}

        <div className="mt-6">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mt-2">4. How We Use Your Information</h2>
            <div>
          <div  className="flex items-start space-x-3 mt-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">To create and manage your account</p>
        </div>
        <div  className="flex items-start space-x-3 mt-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">To verify your identity via OTP</p>
        </div>
        <div  className="flex items-start space-x-3 mt-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">To customize your experience based on your course, trade, and college information</p>
        </div>
        <div  className="flex items-start space-x-3 mt-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">To process transactions for book purchases</p>
        </div>
        <div  className="flex items-start space-x-3 mt-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">To provide you with access to free and paid books</p>
        </div>
        <div  className="flex items-start space-x-3 mt-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">To communicate with you about your account and purchases</p>
        </div>
       
        </div>

        </div>
{/* -------------5--------------- */}
<div className='mt-6'>
    <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mt-2">5. Data Security</h2>
    <div className=' mt-4 text-gray-700'>
    <p> We take data security seriously and employ industry-standard measures to protect your personal information. While we strive to protect your data, please note that no transmission over the internet is 100% secure. By using True-Edu, you acknowledge that you are doing so at your own risk.</p>
    </div>
    </div>
    {/* ------------6---------------- */}

    <div className='mt-6'>
    <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mt-2">6. Your Rights</h2>
    <div className=' mt-4 text-gray-700'>
    <p>You have the following rights concerning your data:</p>
    </div >
    
    <div className='mt-2 text-gray-700'>
    <ol><p><strong>Correction:-</strong>  You can request corrections to any inaccurate information.</p></ol>
    </div>
    <div className='mt-2 text-gray-700'>
    <ol><p><strong> Deletion:-</strong> You can request the deletion of your account and associated information.</p></ol>
    </div>
    <div className='mt-2 text-gray-700'>
    <ol><p><strong>Opt-Out:-</strong> You can opt out of promotional communications.</p></ol>
    </div>
    <div className=' mt-4 text-gray-700'>
    <p>If you wish to exercise any of these rights, please contact us at the information provided below.</p>
    </div >
    </div>
    {/* ---------7---------- */}

    <div className='mt-6'>
    <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mt-2">7. Changes to This Privacy Policy</h2>
    <div className=' mt-4 text-gray-700'>
    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with a new effective date. Please review this policy periodically to stay informed about any updates.</p>
    </div>
    </div>

    {/* ---------------8------------------- */}

    <div className='mt-6'>
    <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mt-2">8. Contact Information</h2>
    <div className=' mt-4 text-gray-700'>
    <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:</p>
    </div >
    
    <div className='mt-2 text-gray-700'>
    <ol><p><strong>True-Edu Email:-</strong>   trueeducation0100@gmail.com, abhishek567thakur@gmail.com</p></ol>
    </div>
    <div className='mt-2 text-gray-700'>
    <ol><p><strong> Phone:-</strong>  7018693350</p></ol>
    </div>
    <div className='mt-2 text-gray-700'>
    <ol><p><strong>Address:-</strong>  Tehsil - Baldwara, Distt - Mandi, H.P., Pin Code - 175043</p></ol>
    </div>
   
    </div>
      </section>
      
    </>
  )
}

export default PrivacyPolicy ;
