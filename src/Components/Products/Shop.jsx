import React from "react";
import productData from "./productData.js";
import ProductCard from "./ProductCard";

const Shop = () => {
  return (
    <div className="shop-container">
      {productData.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Shop;
