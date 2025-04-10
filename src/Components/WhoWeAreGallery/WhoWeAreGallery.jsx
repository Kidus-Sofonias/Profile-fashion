import React from "react";

const WhoWeAreGallery = ({ fashionLooks = [] }) => {
  return (
    <div className="row mt-5 text-center">
      {fashionLooks.map((imgSrc, index) => (
        <div key={index} className="col-md-4 mb-4">
          <img
            src={imgSrc}
            alt={`Fashion Look ${index + 1}`}
            className="img-fluid rounded-1"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
};

export default WhoWeAreGallery;
