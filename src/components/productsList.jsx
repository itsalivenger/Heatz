// src/components/ProductList.js
import React from "react";
import mockProducts from "../mockData/products";
import ProductCard from "./productCard";

const ProductList = () => {
  return (
    <div className="container my-5 ">
        <h1 className="text-white p-4">Headphones For You!</h1>
      <div className="row">
        {mockProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductCard
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
