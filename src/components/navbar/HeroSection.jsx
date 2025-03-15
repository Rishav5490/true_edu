import React from "react";
import { Link } from "react-router-dom";
import hero from "../../../public/OBJECTS.png";
// import book1 from "../../../public/book1.png";
// import book2 from "../../../public/book2.png";
// import book3 from "../../../public/book3.png";
import ctg1 from "../../../public/ctg1.png";
import ctg2 from "../../../public/ctg2.png";
import ctg3 from "../../../public/ctg3.png";
import ctg4 from "../../../public/ctg4.png";
import ctg5 from "../../../public/ctg5.png";
import pro from "../../../public/14pro.png";
import pro2x from "../../../public/14pro2x.png";
import pic from "../../../public/pic.png";
import rishi from "../../../public/rishi.jpg";

const book = [
  {
    id: 1,
    title: "Electric Generation System",
    image:"../../../public/book1.png",
    author: "Dr. Sandeep Kumar",
  },  {
    id: 2,  
    title: "Electrical Machines - 1",
    image:"../../../public/book2.png",
    author: "Dr. Nikita Gupta",
  },  { 
    id: 3,
    title: "High Voltage Engineering",
    image:"../../../public/book3.png",
    author: "Dr. Nikita Gupta",
  },  

];

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between px-50 py-25 bg-blue-50   ">
        <div className="md:w-xl text-center md:text-left">
          <h1 className="text-xl font-bold text-gray-900">
            Your Journey, Our Books →
          </h1>
          <p className="text-gray-600 mt-4">
            {" "}
            Empowering students with enriching books. Explore, learn, and thrive
            with every page. Your journey to knowledge and success starts here.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-lg shadow-xl hover:bg-blue-700 transition">
            <Link to="/">Explore Books →</Link>
          </button>
        </div>
        <div className=" flex justify-center mt-10 md:mt-0">
          <img
            src={hero}
            alt="Books Illustration"
            className="w-full max-w-md "
          />
        </div>
      </div>

      {/* Key Features */}
      <section className="bg-smoke-100 rounded-2xl   shadow-lg m-20  ">
      <section className="bg-gray-100 rounded-2xl shadow-lg mx-6 md:mx-20 p-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-900 font-semibold uppercase text-sm">Key Features</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          What Makes Our Books Truly Exceptional
        </h2>
        <p className="text-gray-600 max-w-lg mt-4">
          Transform the way you read with our vast collection of ebooks. From bestsellers to
          exclusive titles, explore diverse genres designed for every reader.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-900">Composition of Our Publications</h3>
            <p className="text-gray-600 text-sm mt-1">
              Strictly according to the latest syllabus provided by AICTE & HPTSB.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-900">Precisely Crafted and Expertly Designed</h3>
            <p className="text-gray-600 text-sm mt-1">
              Strategically Engineered and Thoroughly Composed.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-900">Comprehensive Methodology</h3>
            <p className="text-gray-600 text-sm mt-1">
              Delivers a holistic and all-encompassing methodology for engineering.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-900">Essential Concepts for Efficient Review</h3>
            <p className="text-gray-600 text-sm mt-1">
              Key concepts have been emphasized for a swift review of fundamental points.
            </p>
          </div>
        </div>
      </div>
    </section>

        {/* NewestAdditions */}
        {/* <section className="p-10">
          <div>
            <p className="text-blue-900 font-semibold uppercase text-sm">
              Latest Launches
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Newest Additions to Our Collection
            </h2>
            <div className="flex justify-evenly mt-6 p-7 bg-gray-100 rounded-xl shadow-md">
              <div className="bg-white rounder-lg rounded-xl shadow-md p-5">
                <img
                  src={book1}
                  alt=""
                  className="w-full h-64 object-cover rounder-lg"
                />
                <h3 className="font-semibold text-gray-900 mt-4">
                  Electric Generation System
                </h3>
                <p className="text-gray-600 text-sm">Er. Sandeep Kumar</p>
              </div>
              <div className="bg-white rounder-lg rounded-xl shadow-md p-5">
                <img
                  src={book2}
                  alt=""
                  className="w-full h-64 object-cover rounder-lg"
                />
                <h3 className="font-semibold text-gray-900 mt-4">
                  Electrical Machines - 1
                </h3>
                <p className="text-gray-600 text-sm">Dr. Nikita Gupta</p>
              </div>
              <div className="bg-white rounder-lg rounded-xl shadow-md p-5 ">
                <img
                  src={book3}
                  alt=""
                  className="w-full h-64  object-cover rounder-lg"
                />
                <h3 className="font-semibold text-gray-900 mt-4">
                  High Voltage Engineering
                </h3>
                <p className="text-gray-600 text-sm">Dr. Nikita Gupta</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* updated latest launches */}
        <section className="p-10">
      <div>
        <p className="text-blue-900 font-semibold uppercase text-sm">Latest Launches</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Newest Additions to Our Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 p-7 bg-gray-100 rounded-xl shadow-md">
          {book.map((book, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-5">
              <img src={book.image} alt={book.title} className="w-full h-64 object-cover rounded-lg" />
              <h3 className="font-semibold text-gray-900 mt-4">{book.title}</h3>
              <p className="text-gray-600 text-sm">{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* Our Categories */}
        <div className="p-6">
          <h2 className="text-xl text-blue-900 font-semibold mb-2">
            OUR CATEGORIES
          </h2>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Pick a Category, Start Reading
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={ctg1}
                alt="image
          "
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-3 text-lg font-semibold text-gray-700 text-center">
                Applied Science
              </h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={ctg2}
                alt="image
          "
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-3 text-lg font-semibold text-gray-700 text-center">
                Computer Engineering
              </h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={ctg3}
                alt="image
          "
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-3 text-lg font-semibold text-gray-700 text-center">
                Civil Engineering
              </h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={ctg4}
                alt="image
          "
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-3 text-lg font-semibold text-gray-700 text-center">
                Mechanical Engineering
              </h3>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={ctg5}
                alt="image
          "
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-3 text-lg font-semibold text-gray-700 text-center">
                Electrical Engineering
              </h3>
            </div>
          </div>
        </div>

        {/* Download our App */}
        <section className="bg-blue-900 text-white px-10  flex flex-col md:flex-row items-center justify-between rounded-lg shadow-lg mt-10 ">
          {/* Left Side : Text Content */}
          <div className="md:w-1/2">
            <h3 className="text-sm font-semibold">DOWNLOAD OUR APP</h3>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">
              Streamline your college studies with our app
            </h1>
            <p className="text-lg mt-4">
              {" "}
              Unlock the power of knowledge with our college study book app.
            </p>
            <p className="font-bold mt-2">
              Lower costs + saved time = enhanced profitability and streamlined
              operations.
            </p>
            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="bg-white text-blue-900 px-4 py-2 rounded-lg flex items-center ">
                🌐 Web App
              </button>
              <button className="bg-white text-blue-900 px-4 py-2 rounded-lg flex items-center">
                {" "}
                📱 Playstore
              </button>
              <button className="bg-white text-blue-900 px-4 py-2 rounded-lg flex items-center :hover bg-blue-900">
                {" "}
                🍎 App Store
              </button>
            </div>
          </div>
          {/* Right Side : Image */}
          <div className="flex  justify-center mt-10 sm:mt-0 lg:w-1/2">
            <img
              src={pro}
              alt="14Pro"
              className=" mb-15 px-15 bg-[url(../../../public/14bg1.png)]"
            />
            <img
              src={pro2x}
              alt="14Pro2x"
              className="mt-15  px-15 bg-[url(../../../public/14bg2.png)]"
            />
          </div>
        </section>

        {/* AuthorCarousel */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-5xl mx-auto px-6">
            {/* Section Header */}
            <h3 className="text-sm text-blue-600 font-semibold">AUTHORS</h3>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Creators of the Collection
            </h2>

            {/* Carousel Section */}
            <div className="relative mt-8">
              <div className="flex gap-6 overflow-x-auto scrollbar-hide">
                <div className=" bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-80 min-w-[80%] md:min-w-[30%] transition-transform duration-300">
                  <div className="flex items-center gap-10">
                    <img
                      src={pic}
                      alt="Author- img"
                      className="w-16 h-16 rounded-full mb-4"
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
                      className="w-16 h-16 rounded-full mb-4"
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
                      className="w-16 h-16 rounded-full mb-4"
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
              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                  {/* <FaArrowLeft /> */}
                </button>
              </div>
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                  {/* <FaArrowRight /> */}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/*Reviews  */}
        <section className="bg-gray-100 p-8  shadow-md  mx-auto">
          <h3 className="text-blue-900 font-bold text-lg mb-4">REVIEWS</h3>
          <h2 className="text-gray-900 text-2xl font-semibold mb-6">
            What They Say About Us
          </h2>
          <div className="  flex gap-4 overflow-x-auto scrollbar-hide ">
            <div className="bg-white  rounded-lg shadow-lg p-2 text-center w-80 min-w-[80%] md:min-w-[30%] transition-transform duration-300">
              <div className=" bg-red-100  rounded-lg  flex items-center gap-4">
                <img
                  src="../../../public/pic.png"
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h4 className="text-gray-900 font-semibold">James Anderson</h4>
                <p className="text-gray-500 text-sm">UI/UX Designer</p>
              </div>

              <div className="bg-green-100 p-5 rounded-lg shadow-lg mt-5 ">
                <h3 className="text-gray-900 font-bold mt-4">
                  Absolutely Thrilled with My Purchase!
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  I recently purchased a dining table and chairs from this
                  store, and I couldn't be happier with the experience. The
                  quality of the furniture is outstanding—beautifully crafted
                  and very sturdy. The delivery was prompt, and the assembly
                  service was efficient and professional. The customer service
                  team was incredibly helpful and answered all my questions with
                  patience. I've already recommended this store to friends and
                  family, and I will definitely be shopping here again. Highly
                  recommended!
                </p>
              </div>
            </div>

            <div className="bg-white  rounded-lg shadow-lg p-2 text-center w-80 min-w-[80%] md:min-w-[30%] transition-transform duration-300">
              <div className=" bg-red-100  rounded-lg  flex items-center gap-4">
                <img
                  src="../../../public/pic.png"
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h4 className="text-gray-900 font-semibold">James Anderson</h4>
                <p className="text-gray-500 text-sm">UI/UX Designer</p>
              </div>

              <div className="bg-green-100 p-5 rounded-lg shadow-lg mt-5 ">
                <h3 className="text-gray-900 font-bold mt-4">
                  Absolutely Thrilled with My Purchase!
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  I recently purchased a dining table and chairs from this
                  store, and I couldn't be happier with the experience. The
                  quality of the furniture is outstanding—beautifully crafted
                  and very sturdy. The delivery was prompt, and the assembly
                  service was efficient and professional. The customer service
                  team was incredibly helpful and answered all my questions with
                  patience. I've already recommended this store to friends and
                  family, and I will definitely be shopping here again. Highly
                  recommended!
                </p>
              </div>
            </div>
            <div className="bg-white  rounded-lg shadow-lg p-2 text-center w-80 min-w-[80%] md:min-w-[30%] transition-transform duration-300">
              <div className=" bg-red-100  rounded-lg  flex items-center gap-4">
                <img
                  src="../../../public/pic.png"
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h4 className="text-gray-900 font-semibold">James Anderson</h4>
                <p className="text-gray-500 text-sm">UI/UX Designer</p>
              </div>

              <div className="bg-green-100 p-5 rounded-lg shadow-lg mt-5 ">
                <h3 className="text-gray-900 font-bold mt-4">
                  Absolutely Thrilled with My Purchase!
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  I recently purchased a dining table and chairs from this
                  store, and I couldn't be happier with the experience. The
                  quality of the furniture is outstanding—beautifully crafted
                  and very sturdy. The delivery was prompt, and the assembly
                  service was efficient and professional. The customer service
                  team was incredibly helpful and answered all my questions with
                  patience. I've already recommended this store to friends and
                  family, and I will definitely be shopping here again. Highly
                  recommended!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* F&Q's */}
        <section>
          <div className=" mx-auto p-10">
            <h3 className="text-blue-900 font-bold text-lg">FAQ'S</h3>
            <h2 className="text-gray-900 text-2xl font-semibold mb-6 mt-2">   
              Have a question? We're here to help.
            </h2>
            <div className="space-y-2 px-15 ">
              <div className="border-b border-gray-300 py-4 cursor-pointer">
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 font-medium">
                    How long does a Mommy Makeover surgery take?
                  </p>
                </div>
                <p className="text-gray-600 mt-2 text-sm">
                  How long does a Mommy Makeover surgery take?
                </p>
              </div>

              <div className="border-b border-gray-300 py-4 cursor-pointer">
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 font-medium">
                    How long does a Mommy Makeover surgery take?
                  </p>
                </div>
                <p className="text-gray-600 mt-2 text-sm">
                  How long does a Mommy Makeover surgery take?
                </p>
              </div>

              <div className="border-b border-gray-300 py-4 cursor-pointer">
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 font-medium">
                    How long does a Mommy Makeover surgery take?
                  </p>
                </div>
                <p className="text-gray-600 mt-2 text-sm">
                  How long does a Mommy Makeover surgery take?
                </p>
              </div>
            </div>
          </div>
        </section>

        
      </section>
    </>
  );
};

export default HeroSection;
