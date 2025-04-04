import React from "react";
import objpublish from "/object-publish.png";
import { Link } from "react-router-dom";
import { FaBookReader, FaCloudDownloadAlt, FaSyncAlt } from "react-icons/fa";

const PublishSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between  px-45 py-28 bg-blue-50   ">
        <div className="md:w-xl text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900">
            Publish Your Book with Us
          </h1>
          <p className="text-gray-600 mt-8">
            {" "}
            We're here to assist you with anything you need. Whether you have
            questions, feedback, or require support, don't hesitate to get in
            touch. Your voice matters to us!
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-900 text-white rounded-lg shadow-xl hover:bg-blue-700 transition">
            <Link to="/contact">Contact Us →</Link>
          </button>
        </div>
        <div className=" flex justify-center mt-10 md:mt-0">
          <img
            src={objpublish}
            alt="Publish-Books Illustration"
            className="w-full max-w-md "
          />
        </div>
      </div>

      {/* Expertise */}
      <section className="py-12 px-6 md:px-20 bg-smoke-200 mx-20">
        <h3 className="text-sm text-blue-600 font-semibold mb-4">EXPERTISE</h3>
        <h2 className="text-2xl font-bold  text-gray-900">
          Why Choose True-Edu?
        </h2>
        <div className="mt-8 flex flex-wrap justify-between gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-80 flex flex-col items-start">
            <div className="mb-4">
              <FaBookReader className="text-blue-700 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold">Smart Recommendations</h3>
            <p className="text-gray-600 mt-2">
              Get personalized book suggestions based on your reading history
              and interests.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 w-80 flex flex-col items-start">
            <div className="mb-4">
              <FaCloudDownloadAlt className="text-blue-700 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold">Offline Reading</h3>
            <p className="text-gray-600 mt-2">
              Download books for offline access. Read anywhere, anytime, without
              internet.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 w-80 flex flex-col items-start">
            <div className="mb-4">
              <FaSyncAlt className="text-blue-700 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold">Seamless Sync</h3>
            <p className="text-gray-600 mt-2">
              Continue reading from where you left off across all your devices.
            </p>
          </div>
        </div>

      {/* --------start Now------------- */}
      <section className="bg-smoke-100 p-6 md:p-12 rounded-xl shadow-lg max-w-5xl mx-auto my-10">
        <h4 className="text-blue-600 text-sm font-bold">START NOW</h4>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
          How to Get Started
        </h2>
        <p className="text-gray-700 mt-4">
          We're excited to collaborate with authors who are passionate about
          making a difference through their writing. To initiate this enriching
          journey, we invite you to share your details with us:
        </p>
       <div>
          <div  className="flex items-start space-x-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">Provide your full name as you'd like it to appear on your published works.</p>
        </div>
        <div  className="flex items-start space-x-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">Share a contact number where we can reach you for discussions regarding your manuscript.</p>
        </div>
        <div  className="flex items-start space-x-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">Enter your primary email address for communication and updates on your publishing process.</p>
        </div>
        <div  className="flex items-start space-x-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">Briefly tell us about your teaching or writing background, including any published works or notable achievements.</p>
        </div>
        <div  className="flex items-start space-x-3">
            <span className="text-blue-600 text-lg">☑</span>
            <p className="text-gray-700">Let us know the subjects or genres you're enthusiastic about writing, and we'll help you find the perfect fit for your creativity.</p>
        </div>

        </div>
        <div className="mt-6">
          <h3 className="font-semibold text-gray-900">
            Submit Your Information:
          </h3>
          <p className="text-gray-700 mt-2">
            Please share all of the above details by E-mail on
            <a
              href="mailto:trueeducation0100@gmail.com"
              className="text-blue-600 font-semibold ml-1"
            >
             <u> trueeducation0100@gmail.com</u>
            </a>
            . Thank you for considering True-Edu Publications as your publishing
            partner. We can't wait to embark on this exciting literary adventure
            together!
          </p>
        </div>
      </section>
      </section>

    </div>
  );
};

export default PublishSection ;
