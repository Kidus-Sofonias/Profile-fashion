import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"; // Import the CSS module
import logo from "../../assets/images/logo.png";

function Nav() {
    return (
      <nav className={`navbar navbar-expand-md navbar-light bg-light`}>
        <div className="container-fluid">
          <Link className="navbar-brand brand" to="/">
            <div className="img-wrapper">
              <img src={logo} alt="" />
            </div>
            <p className="logo-text">Profile Fashion</p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Nav;
