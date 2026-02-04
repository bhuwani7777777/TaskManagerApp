import React from "react";

const Achievements = () => {
  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center mb-4">Achievements & Activities</h2>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow h-100">
            <img
              src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178"
              className="card-img-top"
              alt="Academic"
            />
            <div className="card-body">
              <h5>Academic Excellence</h5>
              <p>
                100% SEE results with distinction holders every year.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow h-100">
            <img
              src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
              className="card-img-top"
              alt="Sports"
            />
            <div className="card-body">
              <h5>Sports & Programs</h5>
              <p>
                District-level sports winners, cultural programs, and debates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
