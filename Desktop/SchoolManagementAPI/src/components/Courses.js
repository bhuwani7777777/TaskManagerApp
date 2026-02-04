import React from "react";

const courses = [
  "Mathematics",
  "Science",
  "English",
  "Computer",
  "Social Studies",
];

const Courses = () => {
  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">Courses</h2>

      <ul className="list-group">
        {courses.map((c, i) => (
          <li key={i} className="list-group-item">
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
