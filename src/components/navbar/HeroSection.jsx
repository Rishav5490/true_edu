import React from "react";
import hero from "../../../public/OBJECTS.png";
import book1 from "../../../public/book1.png";
import book2 from "../../../public/book2.png";
import book3 from "../../../public/book3.png";


const HeroSection = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-between px-50 py-25 bg-blue-50 ">
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
        <img src={hero} alt="Books Illustration" className="w-full max-w-md "  />
      </div>
    </div>




    {/* Key Features */}
   <section className="bg-gray-100 rounded-2xl   shadow-lg m-20 ">
    <section className="bg-gray-100 rounded-2xl p-8 shadow-lg m-20 ">
      <div className="max-w-6xl mx-auto py-4 ">
        <p className="text-blue-600 font-semibold uppercase text-sm">Key Features</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          What Makes Our Books Truly Exceptional
        </h2>
        <div className="flex flex-wrap justify-between mt-4">
          <p className="text-gray-600 max-w-lg">
            Transform the way you read with our vast collection of ebooks.
            From bestsellers to exclusive titles, explore diverse genres designed for every reader.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-4 mt-6">
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
    <section className="p-10">
     <div>
        <p className="text-blue-600 font-semibold uppercase text-sm">Latest Launches</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Newest Additions to Our Collection</h2>
        <div  className="flex justify-evenly mt-6 p-4 rounded-xl shadow-md">
           <div className="bg-white rounder-lg rounded-xl shadow-md p-5">
            <img src={book1} alt="" className="w-full h-64 object-cover rounder-lg" />
            <h3 className="font-semibold text-gray-900 mt-4">Electric Generation System</h3>
            <p className="text-gray-600 text-sm">Er. Sandeep Kumar</p>
           </div>
           <div className="bg-white rounder-lg rounded-xl shadow-md p-5">
            <img src={book2} alt="" className="w-full h-64 object-cover rounder-lg" />
            <h3 className="font-semibold text-gray-900 mt-4">Electrical Machines - 1</h3>
            <p className="text-gray-600 text-sm">Dr. Nikita Gupta</p>
           </div>
           <div className="bg-white rounder-lg rounded-xl shadow-md p-5 ">
            <img src={book3} alt="" className="w-full h-64  object-cover rounder-lg" />
            <h3 className="font-semibold text-gray-900 mt-4">High Voltage Engineering</h3>
            <p className="text-gray-600 text-sm">Dr. Nikita Gupta</p>
           </div>
        
        </div> 
     </div>
    </section>
    </section>


    </>
  );
};

export default HeroSection;
