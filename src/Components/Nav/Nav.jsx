import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/images/nav-logo.png";

function Nav() {
  const navRef = useRef();
  const toggleButtonRef = useRef();

  const handleNavLinkClick = () => {
    const collapseEl = navRef.current;
    const toggleButton = toggleButtonRef.current;
    if (collapseEl && collapseEl.classList.contains("show")) {
      collapseEl.classList.remove("show");
      if (toggleButton) {
        toggleButton.setAttribute("aria-expanded", "false");
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top shadow-sm">
      <div className="whole-container container-fluid">
        <Link
          className="navbar-brand brand align-items-center"
          to="/"
          onClick={handleNavLinkClick}
        >
          <div className="img-wrapper">
            <img src={logo} alt="Profile Fashion Logo" />
          </div>
          <p className="logo-text m-0 ms-1">Profile Fashion</p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={toggleButtonRef}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" ref={navRef}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavLinkClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                onClick={handleNavLinkClick}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/products"
                onClick={handleNavLinkClick}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                onClick={handleNavLinkClick}
              >
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
