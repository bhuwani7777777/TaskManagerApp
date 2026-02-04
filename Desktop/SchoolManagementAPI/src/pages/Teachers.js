import React from "react";
import "./Teachers.css"; // Optional: custom CSS for styling

const teachersData = [
  {
    name: "Mr. Bhuwani Bikram Nembang",
    role: "Principal",
    photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    bio: "Leading the school with vision and dedication.",
    email: "principal@goldensunrise.edu.np",
    phone: "+977-9800000001",
    address: "Gauradaha, Jhapa, Nepal",
    highlight: true,
  },
  {
    name: "Mrs. Swastika Basnet",
    role: "Vice Principal",
    photo: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
    bio: "Ensuring academic excellence and discipline.",
    email: "viceprincipal@goldensunrise.edu.np",
    phone: "+977-9800000002",
    address: "Gauradaha, Jhapa, Nepal",
    highlight: true,
  },
  {
    name: "Mr. Ishan Shrestha",
    role: "Director",
    photo: "https://images.unsplash.com/photo-1603415526960-f7e0328b7b4d",
    bio: "Overseeing school administration and operations.",
    email: "director@goldensunrise.edu.np",
    phone: "+977-9800000003",
    address: "Gauradaha, Jhapa, Nepal",
    highlight: true,
  },
  {
    name: "Mr. Ram Gurung",
    role: "Mathematics Teacher",
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
    bio: "Passionate about numbers and problem solving.",
    email: "ram.gurung@goldensunrise.edu.np",
    phone: "+977-9800000010",
    address: "Gauradaha, Jhapa, Nepal",
    highlight: false,
  },
  {
    name: "Mrs. Sita Rai",
    role: "English Teacher",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    bio: "Guiding students to master English with confidence.",
    email: "sita.rai@goldensunrise.edu.np",
    phone: "+977-9800000011",
    address: "Gauradaha, Jhapa, Nepal",
    highlight: false,
  },
  {
    name: "Mr. Ramesh Tamang",
    role: "Science Teacher",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    bio: "Making science fun and interactive for all students.",
    email: "ramesh.tamang@goldensunrise.edu.np",
    phone: "+977-9800000012",
    address: "Gauradaha, Jhapa, Nepal",
    highlight: false,
  },
  {
    name: "Mrs. Anju Limbu",
    role: "Nepali Teacher",
    photo: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
    bio: "Teaching Nepali language with passion and creativity.",
    email: "anju.limbu@goldensunrise.edu.np",
    phone: "+977-9800000013",
    address: "Gauradaha, Jhapa, Nepal",
    highlight: false,
  },
];

const Teachers = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-5">Our Teachers & Staff</h2>

      {/* Featured Teachers */}
      <div className="row mb-5">
        {teachersData
          .filter((teacher) => teacher.highlight)
          .map((teacher, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card highlight-card h-100 text-center shadow-sm">
                <img
                  src={teacher.photo}
                  alt={teacher.name}
                  className="card-img-top rounded-circle mx-auto mt-3 teacher-photo"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{teacher.name}</h5>
                  <p className="text-primary fw-semibold">{teacher.role}</p>
                  <p className="card-text text-muted">{teacher.bio}</p>
                  <hr />
                  <p className="mb-1">
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${teacher.email}`}>{teacher.email}</a>
                  </p>
                  <p className="mb-1">
                    <strong>Phone:</strong> {teacher.phone}
                  </p>
                  <p className="mb-0">
                    <strong>Address:</strong> {teacher.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>

      <hr />

      {/* Other Teachers */}
      <div className="row">
        {teachersData
          .filter((teacher) => !teacher.highlight)
          .map((teacher, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card h-100 text-center shadow-sm">
                <img
                  src={teacher.photo}
                  alt={teacher.name}
                  className="card-img-top rounded-circle mx-auto mt-3 teacher-photo-small"
                />
                <div className="card-body">
                  <h6 className="card-title fw-bold">{teacher.name}</h6>
                  <p className="text-secondary">{teacher.role}</p>
                  <p className="card-text text-muted small">{teacher.bio}</p>
                  <hr />
                  <p className="mb-1 small">
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${teacher.email}`}>{teacher.email}</a>
                  </p>
                  <p className="mb-1 small">
                    <strong>Phone:</strong> {teacher.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Teachers;
