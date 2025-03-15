import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";

const book = [
  {
    id: 1,
    title: "Electric Generation System",
    author: "Dr. Sandeep Kumar",
    image: "../../../public/book1.png",
  },
  {
    id: 2,
    title: "Electrical Machines - 1",
    author: "Dr. Nikita Gupta",
    image: "../../../public/book2.png",
  },
  {
    id: 3,
    title: "High Voltage Engineering",
    author: "Dr. Nikita Gupta",
    image: "../../../public/book3.png",
  },
  {
    id: 4,
    title: "High Voltage Engineering",
    author: "Dr. Nikita Gupta",
    image: "../../../public/book3.png",
  },
  {
    id: 5,
    title: "Electric Generation System",
    author: "Dr. Sandeep Kumar",
    image: "../../../public/book1.png",
  },
  {
    id: 6,
    title: "Electrical Machines - 1",
    author: "Dr. Nikita Gupta",
    image: "../../../public/book2.png",
  },
  {
    id: 7,
    title: "Electrical Machines - 1",
    author: "Dr. Nikita Gupta",
    image: "../../../public/book2.png",
  },
  {
    id: 8,
    title: "High Voltage Engineering",
    author: "Dr. Nikita Gupta",
    image: "../../../public/book3.png",
  },
  {
    id: 9,
    title: "Electric Generation System",
    author: "Dr. Sandeep Kumar",
    image: "../../../public/book1.png",
  },
  {
    id: 10,
    title: "Electric Generation System",
    author: "Dr. Sandeep Kumar",
    image: "../../../public/book1.png",
  },
  {
    id: 11,
    title: "Electrical Machines - 1",
    author: "Dr. Nikita Gupta",
    image: "../../../public/book2.png",
  },
  {
    id: 12,
    title: "High Voltage Engineering",
    author: "Dr. Nikita Gupta",
    image: "../../../public/book3.png",
  },
  {
    id: 13,
    title: "High Voltage Engineering",
    author: "Dr. Nikita Gupta",
    image: "../../../public/book3.png",
  },
  {
    id: 14,
    title: "Electric Generation System",
    author: "Dr. Sandeep Kumar",
    image: "../../../public/book1.png",
  },
  {
    id: 15,
    title: "Electrical Machines - 1",
    author: "Dr. Nikita Gupta",
    image: "../../../public/book2.png",
  },
  {
    id: 16,
    title: "Electrical Machines - 1",
    author: "Dr. Nikita Gupta",
    image: "../../../public/book2.png",
  },
  {
    id: 17,
    title: "High Voltage Engineering",
    author: "Dr. Nikita Gupta",
    image: "../../../public/book3.png",
  },
  {
    id: 18,
    title: "Electric Generation System",
    author: "Dr. Sandeep Kumar",
    image: "../../../public/book1.png",
  },
 
  // Add more books as needed
];
const OurBooks = () => {
  const [search, setSearch] = useState("");

  const filteredBooks = book.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );
 
  return (
    <div>
         <div className="p-6 max-w-6xl mx-auto">
        <h3 className='text-blue-800 text-lg  mb-5'>OUR BOOKS</h3>
        <div className='flex justify-between items-center'>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore Our Collection</h2>
      <div className="mb-4">
      <input
      type="search"
      placeholder=" Search Books ... 📖🔍"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="px-3 py-2 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
    />         
       
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={book.image}
              alt="Book-Cover"
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
            </div>
          </div>

          
         ))} 
        
      </div>
    </div>
      
    </div>
  )
}

export default OurBooks ;
