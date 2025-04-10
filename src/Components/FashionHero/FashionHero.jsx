import React from "react";
import "./FashionHero.css";
import image from "../../assets/images/home1.png";
import "bootstrap/dist/css/bootstrap.min.css";

const FashionHero = () => {
  return (
    <div className="container py-5 mt-md-5 ">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
          <h1 className="fw-bold display-5">
            Discover elegant <br /> and modest fashion
          </h1>
          <p className="mt-3 text-muted">
            your go-to destination for high-quality Muslim clothing. From
            traditional wear to modern designs, we offer a wide range of styles
            that blend comfort, culture, and sophistication. Shop now for
            abayas, hijabs, thobes, and more!
          </p>
          <button className="btn btn-warning rounded-pill px-4 py-2 mt-3 discover-btn">
            DISCOVER MORE <span className="ms-2">→</span>
          </button>
        </div>

        {/* Image Section */}
        <div className="col-lg-6 text-center">
          <img
            src={image}
            alt="Modest Fashion"
            className="img-fluid rounded-4 shadow fashion-img"
            style={{ maxWidth: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default FashionHero;
