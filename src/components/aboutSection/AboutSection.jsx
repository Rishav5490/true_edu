import React from 'react'
import { Link } from 'react-router-dom'
import { FaBullseye, FaEye, FaCheckCircle } from "react-icons/fa";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaBookReader, FaCloudDownloadAlt, FaSyncAlt } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import objectAbout from "/object-about.png";
import abhishek from "/Abhishek.png";
import rishav from "/Rishav.png";
import rubel from "/Rubel.png";
import pic from "/pic.png";
import rishi from "/Rishi.jpg"; 
const AboutSection = () => {
  return (
    <>
    <section className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-8xl items-center mx-auto ">
    <section className="bg-white-100 text-white mt-10 gap-20 p-5 md:px-20 flex flex-col md:flex-row items-center justify-around">
      <div className="md:w-1/2 space-y-6">
      <h2 className="text-lg text-blue-900 font-semibold">ABOUT</h2>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-600">Welcome to True-Edu Publications</h2>
        <p className="text-gray-600">
          At True-Edu Publications, our passion lies in empowering students with
          the knowledge and tools they need to succeed. We are dedicated to
          providing top-quality educational materials authored by experienced
          experts in their respective fields.
        </p>
        <p className="text-gray-600">
          Our commitment to excellence shines through in every book we offer.
          Whether you're a student striving for academic excellence or an
          educator seeking valuable resources for your classroom, you can trust
          True-Edu Publications to deliver the highest standards of educational
          content.
        </p>
        <p className="text-gray-600">
          Join us on our mission to inspire and educate the minds of tomorrow's
          leaders. Explore our extensive collection of books, and discover the
          True-Edu difference today.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={objectAbout}
          alt="True-Edu Team"
          className="w-full max-w-md md:max-w-lg"
        />
      </div>
    </section>

    {/* -------------------------mission Vision--------------------------------- */}
    <section className="bg-gray-100 py-12 px-6 md:px-20 flex flex-col md:flex-row gap-8">
      {/* Mission Card */}
      <div className="bg-white p-6 rounded-2xl shadow-lg flex-1">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-gray-200 p-3 rounded-lg">
            <FaBullseye className="text-gray-700 text-xl" />
          </div>
          <h3 className="text-xl font-bold">OUR MISSION</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Guided by our core values of excellence, integrity, and innovation, we strive to create a dynamic and inclusive learning environment. Through the expertise of our experienced authors and the dedication of our team, we aim to deliver educational materials that inspire, inform, and transform lives.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-gray-700">
            <FaCheckCircle className="text-blue-600" /> Universal access to education
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <FaCheckCircle className="text-blue-600" /> Universal access to education
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <FaCheckCircle className="text-blue-600" /> Universal access to education
          </li>
        </ul>
      </div>

      {/* Vision Card */}
      <div className="bg-white p-6 rounded-2xl shadow-lg flex-1">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-gray-200 p-3 rounded-lg">
            <FaEye className="text-gray-700 text-xl" />
          </div>
          <h3 className="text-xl font-bold">OUR VISION</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Guided by our core values of excellence, integrity, and innovation, we strive to create a dynamic and inclusive learning environment. Through the expertise of our experienced authors and the dedication of our team, we aim to deliver educational materials that inspire, inform, and transform lives.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-gray-700">
            <FaCheckCircle className="text-blue-600" /> Universal access to education
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <FaCheckCircle className="text-blue-600" /> Universal access to education
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <FaCheckCircle className="text-blue-600" /> Universal access to education
          </li>
        </ul>
      </div>
    </section>

    {/* TeamMembers */}
    <section className="p-10 md:px-20 bg-gray-200  items-center">
    <h2 className="text-lg text-blue-900 font-semibold mb-4">OUR TEAM</h2>
      <h2 className="text-3xl font-bold  text-gray-900">Meet the Minds Behind the Mission</h2>
      <div className="mt-8 flex flex-wrap justify-between  p-6 gap-6">
          <div
            className="bg-white rounded-2xl shadow-lg p-6 w-80 flex flex-col items-center"
          >
            <img
              src={abhishek}
              alt="img-CEO"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Abishek</h3>
            <p className="text-gray-600">Founder & CEO</p>
            <div className="mt-4 flex gap-4">
            <Link to="https://www.linkedin.com/in/abhishek-sharma-507757167/" target='_blank' > <FaLinkedin  className="text-blue-700 text-2xl cursor-pointer" /></Link> 
            <Link to="https://www.instagram.com/abhisheksharma4587/" target='_blank'  > <FaInstagram className="text-pink-500 text-2xl cursor-pointer"  /></Link>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl shadow-lg p-6 w-80 flex flex-col items-center"
          >
            <img
              src={rishav}
              alt="img-SD"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Rishav Kumar</h3>
            <p className="text-gray-600">Software Developer</p>
            <div className="mt-4 flex gap-4">
            <Link to="https://www.linkedin.com/in/rishav-kumar-0ba203191/" target='_blank' > <FaLinkedin  className="text-blue-700 text-2xl cursor-pointer" /></Link> 
            <Link to="https://www.instagram.com/01rishavthakur__/?next=%2F" target='_blank'  > <FaInstagram className="text-pink-500 text-2xl cursor-pointer"  /></Link>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl shadow-lg p-6 w-80 flex flex-col items-center"
          >
            <img
              src={rubel}
              alt="img-HOE"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">Rubel Singh Thakur</h3>
            <p className="text-gray-600">Head of Editorial</p>
            <div className="mt-4 flex gap-4">
              <Link to="https://www.linkedin.com/in/rubel-singh-846725273/"target='_blank'  > <FaLinkedin  className="text-blue-700 text-2xl cursor-pointer" target="_blank" /></Link> 
              <Link to="https://www.instagram.com/_._rubel_._._/"target='_blank'  > <FaInstagram className="text-pink-500 text-2xl cursor-pointer" target='blank' /></Link>
            </div>
          </div>
      </div>
    </section>

    {/* Expertise */}
    <section className="py-12 px-6 md:px-20 bg-gray-100">
    <h2 className="text-lg text-blue-900 font-semibold mb-4">EXPERTISE</h2>
      <h2 className="text-3xl font-bold  text-gray-900">Why Choose True-Edu?</h2>
      <div className="mt-8 flex flex-wrap justify-between gap-6 p-6">
    
          <div
            
            className="bg-white rounded-2xl shadow-lg p-6 w-80 flex flex-col items-start "
          >
            <div className="mb-4"><FaBookReader className="text-blue-900 text-3xl" /></div>
            <h3 className="text-xl font-semibold">Smart Recommendations</h3>
            <p className="text-gray-900 mt-2">Get personalized book suggestions based on your reading history and interests.</p>
          </div>
          <div
            
            className="bg-white rounded-2xl shadow-lg p-6 w-80 flex flex-col items-start"
          >
            <div className="mb-4"><FaCloudDownloadAlt className="text-blue-900 text-3xl" /></div>
            <h3 className="text-xl font-semibold">Offline Reading</h3>
            <p className="text-gray-900 mt-2">Download books for offline access. Read anywhere, anytime, without internet.</p>
          </div>
    
          <div
            
            className="bg-white rounded-2xl shadow-lg p-6 w-80 flex flex-col items-start"
          >
            <div className="mb-4"><FaSyncAlt className="text-blue-900 text-3xl" /></div>
            <h3 className="text-xl font-semibold">Seamless Sync</h3>
            <p className="text-gray-900 mt-2">Continue reading from where you left off across all your devices.</p>
          </div>
    
    
      </div>
    </section>
    
    {/* ---------------------AuthorCarousel------------------------ */}
    <section className="bg-gray-100 py-12">
          <div className="bg-gray-100 p-15  md:px-20">
            {/* Section Header */}
            <h3 className="text-lg text-blue-900 font-semibold">AUTHORS</h3>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Creators of the Collection
            </h2>

            {/* Carousel Section */}
            <div className="mt-8">
              <div className="flex gap-6 overflow-x-auto  justify-evenly">
                <div className=" bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-80 min-w-[80%] md:min-w-[30%] transition-transform duration-300">
                  <div className="flex items-center gap-10">
                    <img
                      src={pic}
                      alt="Author- img"
                      className="min-w-10 h-16 rounded-full mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold">James Anderson</h3>

                      <p className="text-sm text-gray-500">UI/UX Designer</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-center mt-4">
                    I recently purchased a dining table and chairs from this
                    store, and I couldn't be happier with the experience.
                  </p>
                </div>
                <div className=" bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-80 min-w-[80%] md:min-w-[30%] transition-transform duration-300">
                  <div className="flex items-center gap-10">
                    <img
                      src={rishi}
                      alt="Author- img"
                      className="min-w-10 h-16 rounded-full mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Rishav Kumar</h3>

                      <p className="text-sm text-gray-500">
                        Mern Stack Developer
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-center mt-4">
                    I recently purchased a dining table and chairs from this
                    store, and I couldn't be happier with the experience.
                  </p>
                </div>
                <div className=" bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-80 min-w-[80%] md:min-w-[30%] transition-transform duration-300">
                  <div className="flex items-center gap-10">
                    <img
                      src={pic}
                      alt="Author- img"
                      className=" min-w-10 h-16 rounded-full mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold">James Anderson</h3>

                      <p className="text-sm text-gray-500">UI/UX Designer</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-center mt-4">
                    I recently purchased a dining table and chairs from this
                    store, and I couldn't be happier with the experience.
                  </p>
                </div>
                {/* ------  3  to  6   ----------*/}

                <div className=" bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-80 min-w-[80%] md:min-w-[30%] transition-transform duration-300">
                  <div className="flex items-center gap-10">
                    <img
                      src="/pic.png"
                      alt="Author- img"
                      className="min-w-10 h-16 rounded-full mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold">James Anderson</h3>

                      <p className="text-sm text-gray-500">UI/UX Designer</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-center mt-4">
                    I recently purchased a dining table and chairs from this
                    store, and I couldn't be happier with the experience.
                  </p>
                </div>
                <div className=" bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-80 min-w-[80%] md:min-w-[30%] transition-transform duration-300">
                  <div className="flex items-center gap-10">
                    <img
                      src="/Rishi.jpg"
                      alt="Author- img"
                      className="min-w-10 h-16 rounded-full mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Rishav Kumar</h3>

                      <p className="text-sm text-gray-500">
                        Mern Stack Developer
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-center mt-4">
                    I recently purchased a dining table and chairs from this
                    store, and I couldn't be happier with the experience.
                  </p>
                </div>
                <div className=" bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-80 min-w-[80%] md:min-w-[30%] transition-transform duration-300">
                  <div className="flex items-center gap-10">
                    <img
                      src="/pic.png"
                      alt="Author- img"
                      className="min-w-10 h-16 rounded-full mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold">James Anderson</h3>

                      <p className="text-sm text-gray-500">UI/UX Designer</p>
                    </div>
                  </div>

                  <p className="text-gray-700 text-center mt-4">
                    I recently purchased a dining table and chairs from this
                    store, and I couldn't be happier with the experience.
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              {/* <div className="  -left-6 transform -translate-y-1/2">
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                  <FaArrowLeft />
                </button>
             
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                  <FaArrowRight />
                </button>
              </div>
              </div> */}
            </div>
          </div>
        </section>
    </section>
    </>
  )
}

export default AboutSection ;
