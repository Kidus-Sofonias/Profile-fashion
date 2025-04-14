import React from "react";
import { motion } from "framer-motion";
import ContactHeader from "../../Components/Contact/ContactHeader";
import ContactFooter from "../../Components/Contact/ContactFooter";

function Contact() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ContactHeader />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ContactFooter />
      </motion.div>
    </div>
  );
}

export default Contact;
