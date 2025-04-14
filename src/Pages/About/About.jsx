import React from "react";
import { motion } from "framer-motion";
import Welcome from "../../Components/Welcome/Welcome";
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre";
import img1 from "../../assets/images/home-image-1.png";
import img2 from "../../assets/images/home-image-2.png";
import img3 from "../../assets/images/home-image-3.png";
import img4 from "../../assets/images/about-image-4.png";
import img5 from "../../assets/images/about-image-5.png";
import img6 from "../../assets/images/about-image-6.png";

function About() {
  const fashionLooks = [img1, img2, img3, img4, img5, img6];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Welcome />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <WhoWeAre fashionLooks={fashionLooks} />
      </motion.div>
    </div>
  );
}

export default About;
