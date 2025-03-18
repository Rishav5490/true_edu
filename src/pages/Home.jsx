import React from "react";
import { FaMobileAlt} from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/navbar/HeroSection";
import Footer from "../components/navbar/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-blue-900 text-white px-20 py-3">
        <div className="flex justify-between items-center flex-wrap">
          <h6 className="uppercase font-normal">
            Create a brighter future by turning the pages of <Link to="/ourbooks"><u>Our books</u> </Link>{" "}
            and shape your tomorrow.
          </h6>
          <div  className="capitalize font-light  text-center flex gap-3">
            <Link to="/"  className=" capitalize font-light  items-center flex gap-2 rounded-lg hover:bg-blue-800 transition">
            <FaMobileAlt /> Get App
            </Link>
            |
            <Link to="/" className="capitalize font-light   items-center flex gap-2  rounded-lg hover:bg-blue-800 transition ">
            <SiWebpack /> visit Store
            </Link>
          </div>
        </div>
      </div>
      <div>
      {/* <Header /> */}
        <Navbar />
        <HeroSection /> 
        <Footer />
      </div>
    </>
  );
};

export default Home ;
