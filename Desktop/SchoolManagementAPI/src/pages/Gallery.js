import React from "react";

const images = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  "https://images.unsplash.com/photo-1605719125065-3dd9c9a14a3c",
  "https://images.unsplash.com/photo-1515165562835-c3b8e6f94f0c",
  "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
  "https://images.unsplash.com/photo-1535909339361-9b4e8b6e0b3f",
];

const Gallery = () => {
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center mb-4">School Gallery</h2>

      <div className="row">
        {images.map((img, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <img
              src={img}
              alt="School Gallery"
              className="img-fluid rounded shadow"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
