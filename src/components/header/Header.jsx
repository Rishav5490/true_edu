import React from "react";
import { Link } from "react-router-dom";
import { FaMobileAlt} from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5"
import { SiWebpack } from "react-icons/si";

const Header = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-900 to-blue-900  text-white md:px-20 px-3 py-3 ">
        <div className="items-center flex flex-col gap-2">
          <h6 className="uppercase font-normal md:text-base text-sm  text-center sm:text-left  md:text-lg  items-center">
            Create a brighter future by turning the pages of <Link to="/ourbooks"><u>Our books</u> </Link>{" "}
            and shape your tomorrow.
            </h6>
          <div className="flex gap-4">
            <Link
              to="https://play.google.com/store/games?hl=en target='_blank'"
              className=" border rounded-md capitalize font-light  items-center flex gap-1 hover:bg-blue-800 transition"
            >
              <FaMobileAlt /> Get App
            </Link>
          
            <Link
              to="https://play.google.com/store/games?hl=en target='_self'"
              className=" border rounded-md capitalize font-light  items-center flex gap-2 hover:bg-blue-800 transition"
            >
              <SiWebpack /> visit Store
            </Link>
            <button className="" >
            
              <Link to="/" className=" border rounded-md capitalize font-light  items-center flex gap-2 hover:bg-blue-800 transition">  <IoArrowBackCircleOutline />Back</Link>
            </button>
          </div>
        </div>
      </div>


    
    </>
  );
};

export default Header;
