import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaSnapchatGhost,
  FaPhoneAlt,
} from "react-icons/fa";
import image from "../../assets/images/contact.png"

const ContactFooter = () => {
  return (
    <div className="container text-center my-5">
      <div className="row align-items-center">
        {/* Illustration */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={image}
            alt="Phone Girl"
            className="img-fluid"
            style={{ maxWidth: "220px" }}
          />
        </div>

        {/* Social & Contact Info */}
        <div className="col-md-6 text-start">
          <h5 className="fw-bold">
            Stay stylish and follow us on social media:
          </h5>
          <ul className="list-unstyled mt-3 mb-4">
            <li>
              <FaInstagram className="me-2 text-danger" /> @ProfileFashion
            </li>
            <li>
              <FaTiktok className="me-2 text-dark" /> @ProfileFashion
            </li>
            <li>
              <FaFacebook className="me-2 text-primary" /> @ProfileFashion
            </li>
            <li>
              <FaSnapchatGhost className="me-2 text-warning" /> @ProfileFashion
            </li>
          </ul>
          <h6 className="fw-bold">PHONE NUMBER</h6>
          <p>
            <FaPhoneAlt className="me-2" /> +251977581805
          </p>
        </div>
      </div>

      {/* Footer bar */}
      <div className="mt-5 py-3 bg-warning rounded-pill text-white fw-bold d-flex justify-content-center align-items-center gap-3">
        {Array(3)
          .fill("★")
          .map((star, index) => (
            <span key={`left-star-${index}`}>{star}</span>
          ))}
        <span>Thank You for Choosing Profile Fashion</span>
        {Array(3)
          .fill("★")
          .map((star, index) => (
            <span key={`right-star-${index}`}>{star}</span>
          ))}
      </div>
    </div>
  );
};

export default ContactFooter;
