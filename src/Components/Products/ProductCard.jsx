import React from "react";
import "./ProductCard.css";

const ProductCard = ({ title, image, price }) => {
    return (
        <div className="product-card">
        <img src={image} alt={title} className="product-image" />
        <h3>{title}</h3>
        <button className="buy-button">
            BUY <br />
            {price}
        </button>
        </div>
    );
};

export default ProductCard;
