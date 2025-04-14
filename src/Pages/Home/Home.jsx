import React from "react";
import { motion } from "framer-motion";
import FashionHero from "../../Components/FashionHero/FashionHero";
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre";
import img1 from "../../assets/images/home-image-1.png";
import img2 from "../../assets/images/home-image-2.png";
import img3 from "../../assets/images/home-image-3.png";

const HomePage = () => {
  const fashionLooks = [img1, img2, img3];

  return (
    <div className="home-page">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FashionHero />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <WhoWeAre fashionLooks={fashionLooks} />
      </motion.div>
    </div>
  );
};

export default HomePage;
