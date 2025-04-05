import React from "react";
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
const ContactSection = () => {
  return (
    <div>
      <section className="bg-gray text-gray-800 py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="md:w-1/2 mb-8 md:mb-0 mt-5 md:mt-0 p-5">
            <h2 className="text-lg text-blue-900 mb-5  font-bold">
              CONTACT US
            </h2>
            <h2 className="text-3xl font-bold">
              Connect with Us, We're Here for You!
            </h2>
            <p className="mt-4 text-gray-900">
              We're here to assist you with anything you need. Whether you have
              questions, feedback, or require support, don't hesitate to get in
              touch. Your voice matters to us!
            </p>

            <div className="max-w-3xl mx-auto p-5 bg-white  shadow-md">
              <h3 className="text-2xl font-bold  text-gray-900 mb-4">
                Contact Us
              </h3>
              <div className="space-y-6">
                {/* Office Address */}
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-blue-900 text-3xl" />

                  <details className="text-md font-semibold text-gray-900">
                    True-Edu Publications, Tehsil-Baldwara, Mandi, Himachal
                    Pradesh, Pin Code - 175034 .
                    <summary className="text-blue-900 text-lg font-semibold">
                      Office Address
                    </summary>
                  </details>
                </div>

                {/* WhatsApp */}

                <div className="flex items-start space-x-4">
                  <FaWhatsapp className="text-blue-900 text-3xl" />
                  <details className="text-md font-semibold text-gray-900">
                    For general inquiries or support, please text us on
                    <Link
                      to="tel:7018693350"
                      className="text-green-600 font-medium"
                    >
                      {" "}
                      7018693350
                    </Link>
                    .
                    <summary className="text-blue-900 text-lg font-semibold ">
                      WhatsApp
                    </summary>
                  </details>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-blue-900 text-3xl" />
                  <details className="text-md font-semibold text-gray-900">
                    <Link
                      to="mailto:trueeducation0100@gmail.com"
                      className="text-green-600 font-medium"
                    >
                      trueeducation0100@gmail.com
                    </Link>
                    <br />
                    <Link
                      to="mailto:support@trueedu.in"
                      className="text-green-600 font-medium"
                    >
                      support@trueedu.in
                    </Link>
                    <summary className="text-blue-900 text-lg font-semibold  ">
                      Email
                    </summary>
                  </details>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-white-900 p-13 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold text-gray">Get In Touch !..</h3>
            <form className="mt-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 mb-3 bg-gray-200 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 mb-3 bg-gray-200 rounded-lg"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 mb-3 bg-gray-200 rounded-lg"
              />
              <textarea
                placeholder=" Type Your Message Here..."
                className="w-full p-3 mb-3 bg-gray-200 rounded-lg"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full mt-2 p-3 bg-blue-900 hover:bg-blue-800 rounded-lg text-white font-bold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
