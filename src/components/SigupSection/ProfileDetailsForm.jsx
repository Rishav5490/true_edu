import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaUniversity,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
const ProfileDetailsForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "",
    university: "",
    address: "",
    course: "",
    branch: "",
    institute: "",
    semester: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setFormData({
      fullName: "",
      email: "",
      gender: "",
      university: "",
      address: "",
      course: "",
      branch: "",
      institute: "",
      semester: "",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-4">
          Enter Profile Details
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Full Name */}
          <div className="flex items-center border rounded-md p-2">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full outline-none"
            />
          </div>
          {/* Course */}
          <div className="flex items-center border rounded-md p-2 relative">
            <MdSchool className="text-gray-400 mr-2" />
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full outline-none"
            >
              <option value="">Course</option>
              <option value="B.Tech">B.Tech</option>
              <option value="MCA">MCA</option>
              <option value="BCA">BCA</option>
            </select>
            <IoMdArrowDropdown className="absolute right-2 text-gray-400" />
          </div>
          {/* Email */}
          <div className="flex items-center border rounded-md p-2">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full outline-none"
            />
          </div>
          {/* Branch */}
          <div className="flex items-center border rounded-md p-2">
            <MdSchool className="text-gray-400 mr-2" />
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              placeholder="Branch"
              className="w-full outline-none"
            />
          </div>
          {/* Gender */}
          <div className="flex items-center border rounded-md p-2 relative">
            <IoMdArrowDropdown className="absolute right-2 text-gray-400" />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full outline-none"
            >
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* Institute Name */}
          <div className="flex items-center border rounded-md p-2">
            <MdSchool className="text-gray-400 mr-2" />
            <input
              type="text"
              name="institute"
              value={formData.institute}
              onChange={handleChange}
              placeholder="Institute Name"
              className="w-full outline-none"
            />
          </div>
          {/* University/Board */}
          <div className="flex items-center border rounded-md p-2">
            <FaUniversity className="text-gray-400 mr-2" />
            <input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
              placeholder="University/Board"
              className="w-full outline-none"
            />
          </div>
          {/* Semester */}
          <div className="flex items-center border rounded-md p-2">
            <MdSchool className="text-gray-400 mr-2" />
            <input
              type="text"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              placeholder="Semester"
              className="w-full outline-none"
            />
          </div>
          {/* Address */}
          <div className="flex items-center border rounded-md p-2 col-span-2">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full outline-none"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="col-span-2 bg-blue-900 text-white py-2 rounded-md hover:bg-blue-700 text-center"
          >
            Submit Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileDetailsForm;
