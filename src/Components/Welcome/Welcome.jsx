import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
import storyImage from "../../assets/images/story.png";

const Welcome = () => {
  return (
    <section className="welcome-section container my-5 pt-5">
      <h2 className="text-center fw-bold mb-4">Welcome to PROFILE FASHION</h2>
      <div className="d-flex flex-column flex-md-row bg-light rounded-4 p-4 shadow-sm story-box">
        <div className="flex-fill p-3">
          <h3 className="fw-bold mb-3">Our Story</h3>
          <p>
            Profile Fashion is more than fashion; it's a pulse, an energy, a
            statement. We're the leading icon of Gen-Z, crafting trends that
            spread like wildfire. Dive into a whirlwind of vibrant, affordable
            fashion. With Profile Fashion, you're not just in the moment, you
            ARE the moment. Get ready to step out, stand out, and seize the
            world alike. Embrace the thrill. Live the Profile Fashion Life.
            Fashion forward, always!
          </p>
          <Link to="/products" className="btn shop-now-btn mt-3">
            Shop Now →
          </Link>
        </div>
        <div className="flex-fill text-center">
          <img
            src={storyImage}
            alt="Fashion Model"
            className="rounded-4 mt-4 mt-md-0 "
            style={{ maxHeight: "400px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
