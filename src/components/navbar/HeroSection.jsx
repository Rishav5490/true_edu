import React from "react";
import hero from "../../assets/OBJECTS.png";

const HeroSection = () => {
  return (
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
        <img src={hero} alt="Books Illustration" className="w-full max-w-md" />
      </div>
    </div>
  );
};

export default HeroSection;
