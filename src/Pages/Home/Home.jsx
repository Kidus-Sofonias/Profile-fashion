import React from "react";
import FashionHero from "../../Components/FashionHero/FashionHero";
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre"

const HomePage = () => {
  return (
    <div className="home-page">
      <FashionHero />
      <WhoWeAre />
    </div>
  );
};

export default HomePage;
