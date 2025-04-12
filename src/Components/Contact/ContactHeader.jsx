import React from "react";
import image from "../../assets/images/hijabi-avatar.png"; // Adjust the path as necessary

const ContactHeader = () => {
  return (
    <div className="container my-4 mt-5">
      <div className="d-flex align-items-center bg-dark text-white rounded-4 p-4 shadow">
        <div className="flex-shrink-0">
          <img
            src={image}
            alt="Hijabi Avatar"
            className="rounded-circle"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </div>
        <div className="ms-4">
          <h1 className="fw-bold mb-1" style={{ fontFamily: "Georgia, serif" }}>
            PROFILE <br /> FASHION
          </h1>
          <p className="fst-italic fw-bold text-warning mb-0">
            We're excited to connect with you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
