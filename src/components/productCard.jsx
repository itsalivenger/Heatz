// src/components/ProductCard.js
import React from "react";

const ProductCard = ({ name, price, image, description }) => {
  return (
    <div className="bg-white  border border-gray-200 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover rounded-t-lg mb-4 md:h-64 lg:h-80"
      />
      <div className="flex flex-col h-full">
        <h5 className="text-lg font-semibold text-gray-800 mb-2">{name}</h5>
        <p className="text-gray-600 mb-4 text-sm md:text-base">{description}</p>
        <p className="text-teal-600 font-bold text-base md:text-lg">{price}</p>
        <button className="mt-auto bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
