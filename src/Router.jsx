import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer"

function AppRouter() {
  return (
    <Router>
      <Nav />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default AppRouter;
