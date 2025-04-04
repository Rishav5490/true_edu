import React from "react";
import { Link } from "react-router-dom";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { IoArrowBackCircleOutline } from "react-icons/io5";
import hero from "/OBJECTS.png";
import ctg1 from "/ctg1.png";
import ctg2 from "/ctg2.png";
import ctg3 from "/ctg3.png";
import ctg4 from "/ctg4.png";
import ctg5 from "/ctg5.png";
import pro from "/14pro.png";
import pro2x from "/14pro2x.png";
import pic from "/pic.png";
import rishi from "/Rishi.jpg";

const book = [
  {
    id: 1,
    title: "Electric Generation System",
    image: "/book1.png",
    author: "Dr. Sandeep Kumar",
  },
  {
    id: 2,
    title: "Electrical Machines - 1",
    image: "/book2.png",
    author: "Dr. Nikita Gupta",
  },
  {
    id: 3,
    title: "High Voltage Engineering",
    image: "/book3.png",
    author: "Dr. Nikita Gupta",
  },
];

const HeroSection = () => {
  return (
    <>
      
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20  py-12 bg-blue-50 text-center md:text-left">
        <div className="md:w-1/2 ">
          <h1 className="text-3xl md:text-3xl  font-bold text-gray-900">
            Your Journey, Our Books →
          </h1>
          <p className="text-gray-600 mt-5 text-sm md:text-base">
            {" "}
            Empowering students with enriching books. Explore, learn, and thrive
            with every page. Your journey to knowledge and success starts here.
          </p>
          <button className="mt-6 px-4 md:px-6 py-2 md:py-3 bg-blue-900 text-white rounded-lg shadow-xl hover:bg-blue-700 transition">
            <Link to="/ourbooks">Explore Books →</Link>
          </button>
        </div>
        <div className="flex justify-center mt-6 md:mt-0 w-full md:w-1/2">
          <img
            src={hero}
            alt="Books Illustration"
            className="w-full max-w-md "
          />
        </div>
      </div>

      {/* Key Features */}
      <section className="bg-gray-100 rounded-2xl shadow-lg mx-4 md:mx-20 p-6 md:p-8 my-10">
        <section className="">
          <div className="max-w-6xl mx-auto text">
            <p className="text-blue-900 font-semibold uppercase text-xl ">
              Key Features
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mt-5 ">
              What Makes Our Books Truly Exceptional
            </h2>
            <p className="text-gray-700 max-w-lg mt-4">
              Transform the way you read with our vast collection of ebooks.
              From bestsellers to exclusive titles, explore diverse genres
              designed for every reader.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900">
                  Composition of Our Publications
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Strictly according to the latest syllabus provided by AICTE &
                  HPTSB.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900">
                  Precisely Crafted and Expertly Designed
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Strategically Engineered and Thoroughly Composed.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900">
                  Comprehensive Methodology
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Delivers a holistic and all-encompassing methodology for
                  engineering.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900">
                  Essential Concepts for Efficient Review
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Key concepts have been emphasized for a swift review of
                  fundamental points.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* updated latest launches */}
        <section className="p-10">
          <div className=" ">
            <p className="text-blue-900 font-semibold uppercase text-xl">
              Latest Launches
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mt-2  text-3xl">
              Newest Additions to Our Collection
            </h2>
            <div className="grid grid-cols sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mt-6  bg-gray-100 rounded-xl  ">
              {book.map((book, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-3">
                  <img
                    src={book.image}
                    loading="lazy"
                    alt={book.title}
                    className="w-screen md:h-64 object-contain rounded-lg"
                  />
                  <h3 className="font-semibold text-gray-900 mt-4">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{book.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* updated our categories */}
        <div className="p-6">
          <h2 className="text-xl text-blue-900 font-semibold mb-2">
            OUR CATEGORIES
          </h2>
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center items-center ">
            Pick a Category, Start Reading
          </h1>
          <div className="overflow-x-auto">
            {/* <marquee behavior=" " direction=""> */}
            <div className="grid grid-cols- xs:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 items-center">
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  sm:w-auto">
                <img
                  src={ctg1}
                  alt="Applied Science"
                  loading="lazy"
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-3 text-lg font-semibold text-gray-700 text-center">
                  Applied Science
                </h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  sm:w-auto">
                <img
                  src={ctg2}
                  alt="Computer Engineering"
                  loading="lazy"
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-3 text-lg font-semibold text-gray-700 text-center">
                  Computer Engineering
                </h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  sm:w-auto">
                <img
                  src={ctg3}
                  alt="Civil Engineering"
                  loading="lazy"
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-3 text-lg font-semibold text-gray-700 text-center">
                  Civil Engineering
                </h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ">
                <img
                  src={ctg4}
                  alt="Mechanical Engineering"
                  loading="lazy"
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-3 text-lg font-semibold text-gray-700 text-center">
                  Mechanical Engineering
                </h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  sm:w-auto">
                <img
                  src={ctg5}
                  alt="Electrical Engineering"
                  loading="lazy"
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="mt-3 text-lg font-semibold text-gray-700 text-center">
                  Electrical Engineering
                </h3>
              </div>
            </div>
            {/* </marquee> */}
          </div>
        </div>

        {/* Download our App */}
        <section className="bg-blue-900 text-white px-10  flex flex-col md:flex-row items-center justify-between rounded-lg shadow-lg mt-15 ">
          {/* Left Side : Text Content */}
          <div className="md:w-1/2 ">
            <h3 className="text-xl font-semibold text-blue-100 underline">
              DOWNLOAD OUR APP
            </h3>
            <h1 className="text-sm md:text-xl lg:text-4xl font-bold mt-2">
              Streamline your college studies with our app
            </h1>
            <p className="lg:text-lg mt-2">
              {" "}
              Unlock the power of knowledge with our college study book app.
            </p>
            <p className="font-bold  md:text-md  lg:text-lg mt-2">
              Lower costs + saved time = enhanced profitability and streamlined
              operations.
            </p>
            {/* Buttons */}
            <div className="mt-6 grid lg:flex  gap-4">
              <button className="bg-white text-blue-900 px-4 py-2 rounded-lg  ">
                <Link to="">Web App</Link>🌐
              </button>
              <button className="bg-white text-blue-900 px-4 py-2 rounded-lg ">
                {" "}
                <Link to="">Playstore</Link>📱
              </button>
              <button className="bg-white text-blue-900 px-4 py-2 rounded-lg  :hover bg-blue-900">
                {" "}
                <Link to="">App Store</Link>🍎
              </button>
            </div>
          </div>
          {/* Right Side : Image */}
          <div className="  md:grid-cols-1 lg:flex mt-10 sm:mt-0 ">
            <img
              src={pro}
              alt="14Pro"
              className=" mb-15 px-10 bg-[url(/14bg1.png)] hover:scale-105 transition-transform duration-300"
            />
            <img
              src={pro2x}
              alt="14Pro2x"
              className="mt-15  px-10 bg-[url(/14bg2.png)] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </section>

        {/* ------------AuthorCarousel ---------------*/}
        <section className="bg-gray-100 py-12">
          <div className="">
            {/* Section Header */}
            <h2 className="text-xl text-blue-900 font-semibold mb-2">
              AUTHORS
            </h2>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Creators of the Collection
            </h2>

            {/* Carousel Section */}
            <div className="relative mt-10  ">
              <div className="  grid  md:grid-cols-1 lg:grid-cols-3 gap-6 bg-gray-200 rounded-lg  shadow-lg p-10  ">
                <div className=" bg-white p-6 rounded-lg shadow-lg flex flex-col  items-center  hover:scale-105 transition-transform duration-300">
                  <div className="grid justify-items-center md:flex lg:flex text-center  gap-5 hover:scale-105 transition-transform duration-300">
                    <img
                      src={pic}
                      alt="Author- img"
                      loading="lazy"
                      className="w-16 h-16 rounded-full mb-4"
                    />
                    <div className="">
                      <h3 className="text-lg font-bold">James Anderson</h3>

                      <p className="text-md text-gray-700 font-semibold">
                        UI/UX Designer
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-900 text-center mt-4">
                    I recently purchased a dining table and chairs from this
                    store, and I couldn't be happier with the experience.
                  </p>
                </div>
                <div className=" bg-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
                  <div className="grid justify-items-center md:flex lg:flex text-center  gap-5 hover:scale-105 transition-transform duration-300">
                    <img
                      src={rishi}
                      alt="Author- img"
                      loading="lazy"
                      className="w-16 h-16 rounded-full mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Rishav Kumar</h3>

                      <p className="text-md text-gray-700 font-semibold">
                        Mern Stack Developer
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-900 text-center mt-4">
                    I recently purchased a dining table and chairs from this
                    store, and I couldn't be happier with the experience.
                  </p>
                </div>
                <div className=" bg-white p-6 rounded-lg shadow-lg flex flex-col items-center  hover:scale-105 transition-transform duration-300">
                  <div className="grid justify-items-center md:flex lg:flex text-center  gap-5 hover:scale-105 transition-transform duration-300">
                    <img
                      src={pic}
                      alt="Author- img"
                      loading="lazy"
                      className="w-16 h-16 rounded-full mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold">James Anderson</h3>

                      <p className="text-md text-gray-700 font-semibold">
                        UI/UX Designer
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-900 text-center mt-4">
                    I recently purchased a dining table and chairs from this
                    store, and I couldn't be happier with the experience.
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              {/* <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                  <FaArrowLeft />
                </button>
              </div>
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                  <FaArrowRight />
                </button>
              </div> */}
            </div>
          </div>
        </section>

        {/*Reviews  */}
        <section className="bg-gray-100 p-8  shadow-md  mx-auto">
          <h2 className="text-xl text-blue-900 font-semibold mb-2">REVIEWS</h2>
          <h3 className="text-gray-900 text-3xl font-bold mb-6">
            What They Say About Us
          </h3>
          <div className=" grid md:grid-cols-1  sm:grid-cols lg:flex gap-4 ">
            <div className="bg-white  rounded-lg shadow-lg p-2 text-center ">
              <div className="grid justify-items-center md:flex lg:flex text-center gap-5 mx-5 mt-5 hover:scale-50 transition-transform duration-200">
                <img
                  src="/pic.png"
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h4 className="text-gray-900 font-bold">James Anderson</h4>
                <p className="text-gray-500 text-sm">UI/UX Designer</p>
              </div>

              <div className="bg-gray-100 p-5 rounded-lg shadow-lg mt-5 hover:scale-95 transition-transform duration-300 cursor-pointer ">
                <h3 className="text-gray-900 font-bold mt-4">
                  Absolutely Thrilled with My Purchase!
                </h3>
                <p className="text-gray-600 text-sm mt-2 ">
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

            <div className="bg-white  rounded-lg shadow-lg p-2 text-center hover:scale-105 transition-transform duration-900">
              <div className="grid justify-items-center md:flex lg:flex text-center gap-5 mx-5 mt-5 hover:scale-50 transition-transform duration-500">
                <img
                  src="/pic.png"
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h4 className="text-gray-900 font-bold">James Anderson</h4>
                <p className="text-gray-500 text-sm">UI/UX Designer</p>
              </div>

              <div className="bg-gray-100 p-5 rounded-lg shadow-lg mt-5 hover:scale-95 transition-transform duration-300 cursor-pointer ">
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
            <div className="bg-white  rounded-lg shadow-lg p-2 text-center">
              <div className="grid justify-items-center md:flex lg:flex text-center gap-5 mx-5 mt-5 hover:scale-50 transition-transform duration-900">
                <img
                  src="/pic.png"
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h4 className="text-gray-900 font-bold">James Anderson</h4>
                <p className="text-gray-500 text-sm">UI/UX Designer</p>
              </div>

              <div className="bg-gray-100 p-5 rounded-lg shadow-lg mt-5 hover:scale-95 transition-transform duration-300 cursor-pointer ">
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
          <div className="bg-gray-100 p-8 mt-10 rounded-lg shadow-md mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">FAQ'S</h2>
            <h3 className="text-gray-900 text-2xl font-bold mb-4">
              Have a question? We're here to help.
            </h3>
            <div className="space-y-4">
              {/* 1 */}
              <details className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                <summary className="font-semibold text-gray-900">
                  How long does a Mommy Makeover surgery take?
                </summary>
                <p className="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus vitae dolor sit! Debitis, similique id dolores,
                  ducimus quae vel cumque nihil magnam praesentium eius,
                  aspernatur soluta veritatis ut ad sequi.
                </p>
              </details>
              {/* 2 */}
              <details className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                <summary className="font-semibold text-gray-800">
                  How long does a Mommy Makeover surgery take?
                </summary>
                <p className="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus vitae dolor sit! Debitis, similique id dolores,
                  ducimus quae vel cumque nihil magnam praesentium eius,
                  aspernatur soluta veritatis ut ad sequi.
                </p>
              </details>
              {/* 3 */}
              <details className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                <summary className="font-semibold text-gray-800">
                  How long does a Mommy Makeover surgery take?
                </summary>
                <p className="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus vitae dolor sit! Debitis, similique id dolores,
                  ducimus quae vel cumque nihil magnam praesentium eius,
                  aspernatur soluta veritatis ut ad sequi.
                </p>
              </details>
              {/* 4 */}
              <details className="bg-white p-4 rounded-lg shadow-md cursor-pointer">
                <summary className="font-semibold text-gray-800">
                  How long does a Mommy Makeover surgery take?
                </summary>
                <p className="mt-2 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus vitae dolor sit! Debitis, similique id dolores,
                  ducimus quae vel cumque nihil magnam praesentium eius,
                  aspernatur soluta veritatis ut ad sequi.
                </p>
              </details>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HeroSection;
