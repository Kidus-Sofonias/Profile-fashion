import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
//   FaXTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top container py-5">
        <div className="row text-center text-md-start">
          {/* Brand Info */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="brand-logo">
              PROFILE <span>FASHION</span>
            </h5>
            <p className="brand-desc">
              Fashion that's accessible, affordable, and undeniably stylish
            </p>
            <div className="social-icons">
              <FaInstagram />
              <FaTiktok />
              <FaFacebookF />
              {/* <FaXTwitter /> */}
            </div>
          </div>

          {/* My Account */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="footer-title">MY ACCOUNT</h5>
            <ul className="footer-links">
              <li>Order History</li>
              <li>My Waitlist</li>
              <li>View Bag</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-md-4">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt /> Jemo 1 rut blg 1st floor
              </li>
              <li>
                <FaPhone /> +251 977758105
              </li>
              <li>
                <FaEnvelope /> profile@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom py-3">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center">
          <p className="mb-2 mb-md-0">© 2025 All Rights Reserved.</p>
          <div className="social-icons">
            <FaInstagram />
            <FaTiktok />
            <FaFacebookF />
            {/* <FaXTwitter /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
