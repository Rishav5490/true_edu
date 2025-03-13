import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/navbar/HeroSection";
import Footer from "../components/navbar/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-blue-900 text-white px-20 py-3">
        <div className="flex justify-between items-center flex-wrap">
          <h6 className="uppercase font-normal">
            Create a brighter future by turning the pages of <u>Our books</u>{" "}
            and shape your tomorrow.
          </h6>
          <div>
            <Link to="/" className="capitalize font-light  text-center">
              📱 Get App
            </Link>{" "}
            |
            <Link to="/" className="capitalize font-light  text-center">
              🕸 visit Store
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

export default Home;
