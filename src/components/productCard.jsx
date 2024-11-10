// src/components/ProductCard.js
import React from "react";
import { FaEye } from "react-icons/fa"; // Import eye icon for view count

const ProductCard = ({ name, price, image, description, views }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-40 object-cover rounded-t-lg mb-4 sm:h-48 md:h-56 lg:h-64"
      />
      <div className="flex flex-col h-full">
        <h5 className="text-base font-semibold text-gray-800 mb-2 sm:text-lg lg:text-xl">{name}</h5>
        <p className="text-gray-600 mb-4 text-xs sm:text-sm md:text-base lg:text-lg">{description}</p>
        <p className="text-teal-600 font-bold text-sm sm:text-base md:text-lg lg:text-xl">{price}</p>

        {/* View Count */}
        <div className="flex items-center text-gray-500 text-sm mt-2">
          <FaEye className="mr-1" /> {views} views
        </div>

        <button className="mt-auto bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
