import React from "react";
import { Link } from "react-router-dom";
import "./ComfortSetBanner.css";
import comfortImg from "../../assets/images/ComfortSetBanner.png";

const ComfortSetBanner = () => {
  return (
    <section className="comfort-banner container text-center my-5">
      <div className="banner-wrapper position-relative">
        <img
          src={comfortImg}
          alt="Comfortable Sets for Women"
          className="img-fluid rounded-4 border border-3"
        />
        <div className="banner-text position-absolute top-50 start-50 translate-middle px-3">
          Comfortable Sets for Women
        </div>
      </div>
      <Link to="/contact" className="btn shop-btn mt-4">
        SHOP NOW
      </Link>
    </section>
  );
};

export default ComfortSetBanner;
