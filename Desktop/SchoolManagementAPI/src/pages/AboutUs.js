import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../assets/hero-school.jpg"; // Local image of the school

const AboutUs = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="text-white text-center py-5"
        style={{
          background: `url(${aboutImage}) center/cover no-repeat`,
          minHeight: "400px",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">About Golden Sunrise School</h1>
          <p className="lead mt-3">
            Shaping Future Leaders with Quality Education in Gauradaha, Jhapa, Nepal
          </p>
          <Link to="/admissions" className="btn btn-warning mt-3">
            Apply Now
          </Link>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="container my-5">
        <div className="row text-center">
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-lg border-0 rounded-4 p-3">
              <h3 className="fw-bold">Our Mission</h3>
              <p className="text-muted mt-2">
                To provide high-quality education in a safe and disciplined environment,
                nurturing the holistic development of every student.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-lg border-0 rounded-4 p-3">
              <h3 className="fw-bold">Our Vision</h3>
              <p className="text-muted mt-2">
                To empower students to become responsible, skilled, and innovative
                leaders of tomorrow, excelling in academics, arts, and sports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Choose Us?</h2>
          <div className="row text-center g-4">
            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 p-3">
                <h5 className="fw-bold">Experienced Teachers</h5>
                <p className="text-muted">
                  Qualified and passionate educators committed to student success.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 p-3">
                <h5 className="fw-bold">Modern Facilities</h5>
                <p className="text-muted">
                  Smart classrooms, science labs, computer labs, and sports grounds.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 p-3">
                <h5 className="fw-bold">Holistic Learning</h5>
                <p className="text-muted">
                  Academic, cultural, and co-curricular programs for overall growth.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 p-3">
                <h5 className="fw-bold">Safe Environment</h5>
                <p className="text-muted">
                  A disciplined, caring, and student-friendly learning atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="container my-5 text-center">
        <h2 className="fw-bold mb-5">Our Achievements at a Glance</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="bg-primary text-white rounded-4 py-4 shadow">
              <h3 className="fw-bold">100%</h3>
              <p>SEE Pass Rate</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-success text-white rounded-4 py-4 shadow">
              <h3 className="fw-bold">50+</h3>
              <p>Sports Trophies</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-warning text-white rounded-4 py-4 shadow">
              <h3 className="fw-bold">30+</h3>
              <p>Cultural Programs</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="bg-danger text-white rounded-4 py-4 shadow">
              <h3 className="fw-bold">500+</h3>
              <p>Happy Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="text-center py-5 bg-primary text-white">
        <h2 className="fw-bold mb-3">Join Golden Sunrise School Today</h2>
        <p className="lead mb-4">
          Become part of a nurturing and high-quality education system.
        </p>
        <Link to="/admissions" className="btn btn-warning btn-lg">
          Apply Now
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
