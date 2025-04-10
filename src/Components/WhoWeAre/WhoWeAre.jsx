import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WhoWeAre.css";
import image2 from "../../assets/images/WhoWeAre.png"

const WhoWeAre = () => {
  return (
    <div className="container my-5">
      <div className="row bg-light rounded-4 p-4 align-items-center who-we-are-container">
        {/* Left Image */}
        <div className="col-lg-5 text-center mb-4 mb-lg-0">
          <img
            src={image2}
            alt="Profile Fashion Model"
            className="img-fluid rounded-4 who-we-are-image"
            style={{ maxHeight: "500px" }}
          />
        </div>

        {/* Right Text */}
        <div className="col-lg-7 text-center text-lg-start">
          <h2 className="fw-bold mb-3">Who We Are ?</h2>
          <p className="text-muted">
            Profile Fashion is where the pulse of Gen-Z fashion beats loudest.
            We're more than just a brand; we're a lifestyle, a statement, a
            movement that captures the essence of youthful energy and fearless
            style. We're all about crafting the trends that everyone wants but
            delivered in a way that makes fashion accessible. The Profil Fashion
            experience is a whirlwind of vibrant, dynamic choices that make
            every day feel like a runway.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
