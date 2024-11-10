import mockProducts from "../mockData/products";
import ProductCard from "./productCard";
import React, { useState } from "react";
import { LuLoader } from "react-icons/lu";



const ProductList = () => {
  const pageSize = 6; 
  const [visibleProducts, setVisibleProducts] = useState(pageSize);

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + pageSize);
  };

  return (
    <div className="container my-5">
      <h1 className="text-white p-4">Headphones For You!</h1>
      <div className="row">
        {/* Display only the products up to the visible count */}
        {mockProducts.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductCard
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              views={product.views}
            />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleProducts < mockProducts.length && (
        <div className="text-center mt-4 flex items-center justify-center ">
          <button
            onClick={loadMoreProducts}
            className="flex items-center justify-center px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none"
          >
            Load More  
            <LuLoader className="mx-2"/>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
