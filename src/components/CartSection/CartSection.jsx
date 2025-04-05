import React from 'react'

const CartSection = () => {
  const getUnitDetails = (unit) => {
    switch (unit) {
      case 1:
        return "Moment of Inertia (M.I.): Definition, M.I. of plane lamina, Radius of gyration, section modulus, and more.";
      case 2:
        return "Definition of rigid, elastic, and plastic bodies, stress, strain, Hook's law, and modulus of elasticity.";
      case 3:
        return "Types of supports, loads, and shear force and bending moment relationships.";
      case 4:
        return "Concept and theory of pure bending, assumptions, and bending stresses in beams.";
      case 5:
        return "Concept of compression member, slenderness ratio, Euler's theory, and conditions for failure.";
      default:
        return "Information not available.";
    }
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 ">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-4xl ">
        <div className="">
          <img
            src="/book1.png"
            alt="Electric Generation System"
            className="w-48 md:w-64 rounded-xl"
          />
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-bold"> Electric Generation System</h1>
            <p className="text-2xl font-semibold text-blue-800">₹249 <br />
             <span className="text-sm text-gray-800">(incl. of all taxes)</span></p>
            <p className="text-gray-800"><strong>By:</strong> Er. Sandeep Kumar</p>
            <p className="text-gray-800"><strong>Edition:</strong> First Edition</p>
            <p className="text-gray-800"><strong>ISBN:</strong> 978-81-962529-7-7</p>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
              Add To Cart
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-700 border-b pb-2">Table of Content</h2>
          <div className="space-y-4 mt-4">
            {["Moment of Inertia", "Simple Stresses & Strains", "Shear Force and Bending Moment", "Bending and Shear Stresses in Beams", "Columns"].map((unit, index) => (
              <div key={index} className="bg-blue-900 p-4 rounded-lg shadow-sm hover:bg-blue-700 transition duration-300">
                <details className="text-gray-800 font-normal mt-1 text-md bg-cyan-100  rounded-xl p-3"> {getUnitDetails(index + 1)}
                <summary className="text-lg font-bold text-gray-900 cursor-pointer">

                  Unit-{index + 1} {unit}
                </summary>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CartSection;
