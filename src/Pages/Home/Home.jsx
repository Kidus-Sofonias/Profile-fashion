import React from "react";
import FashionHero from "../../Components/FashionHero/FashionHero";
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre";
import img1 from "../../assets/images/home-image-1.png";
import img2 from "../../assets/images/home-image-2.png";
import img3 from "../../assets/images/home-image-3.png";


const HomePage = () => {
  const fashionLooks = [img1, img2, img3];

  return (
    <div className="home-page">
      <FashionHero />
      <WhoWeAre fashionLooks={fashionLooks} />
    </div>
  );
};

export default HomePage;
