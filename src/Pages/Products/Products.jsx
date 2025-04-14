import React from "react";
import { motion } from "framer-motion";
import ComfortSetBanner from "../../Components/ComfortSetBanner/ComfortSetBanner";
import Shop from "../../Components/Products/Shop";

function Products() {
  return (
    <div className="products-page">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ComfortSetBanner />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Shop />
      </motion.div>
    </div>
  );
}

export default Products;
