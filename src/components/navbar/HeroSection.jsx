import React from "react";
import hero from "../../../public/OBJECTS.png";
import book1 from "../../../public/book1.png";
import book2 from "../../../public/book2.png";
import book3 from "../../../public/book3.png";
import ctg1 from "../../../public/ctg1.png";
import ctg2 from "../../../public/ctg2.png";
import ctg3 from "../../../public/ctg3.png";
import ctg4 from "../../../public/ctg4.png";
import ctg5 from "../../../public/ctg5.png";
import pro from "../../../public/14pro.png";
import pro2x from "../../../public/14pro2x.png";

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
            Explore Books →
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
        <section className="bg-gray-100 rounded-2xl p-8 shadow-lg m-20  ">
          <div className="max-w-6xl mx-auto p-4 ">
            <p className="text-blue-900 font-semibold uppercase text-sm">
              Key Features
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              What Makes Our Books Truly Exceptional
            </h2>
            <div className="flex flex-wrap justify-between mt-4">
              <p className="text-gray-600 max-w-lg">
                Transform the way you read with our vast collection of ebooks.
                From bestsellers to exclusive titles, explore diverse genres
                designed for every reader.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-4 mt-6">
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

        {/* NewestAdditions */}
        <section className="p-10">
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
                      src="../../../public/pic.png"
                      alt="Author- img"
                      className="w-16 h-16 rounded-full mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold">James Anderson</h3>

                      <p className="text-sm text-gray-500">
                      UI/UX Designer
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
                      src="../../../public/Rishi.jpg"
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
                      src="../../../public/pic.png"
                      alt="Author- img"
                      className="w-16 h-16 rounded-full mb-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold">James Anderson</h3>

                      <p className="text-sm text-gray-500">
                      UI/UX Designer
                      </p>
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
      </section>
    </>
  );
};

export default HeroSection;
