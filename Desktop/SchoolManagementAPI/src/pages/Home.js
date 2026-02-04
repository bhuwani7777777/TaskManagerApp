import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Local Images
import heroImage from "../assets/golden-sunrise.jpg";
import academicsImg from "../assets/admission.jpg";
import sportsImg from "../assets/cultural.jpg";
import culturalImg from "../assets/cultural.jpg";
import technologyImg from "../assets/it.jpg";

const Home = () => {
  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section
        className="hero-section text-white text-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hero-overlay">
          <div className="container">
            <h1 className="fw-bold display-4">
              Golden Sunrise Secondary English School
            </h1>
            <p className="lead mt-3">
              Gauradaha, Jhapa, Nepal <br />
              Shaping Future Leaders with Quality Education
            </p>

            <div className="mt-4">
              <Link to="/about" className="btn btn-warning btn-lg me-3">
                Learn More
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center section-title">Why Choose Us?</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Qualified Teachers</h5>
              <p className="text-muted">
                Experienced, skilled, and dedicated teachers focused on student
                growth and excellence.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Modern Education</h5>
              <p className="text-muted">
                Smart classrooms, computer education, and practical learning
                methods.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h5 className="fw-bold">Safe Environment</h5>
              <p className="text-muted">
                Secure campus with discipline, care, and student-friendly
                learning atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACADEMICS & ACTIVITIES ================= */}
      <section className="container my-5">
        <h2 className="text-center section-title">
          Academics & Student Life
        </h2>

        <div className="row">
          {[
            {
              img: academicsImg,
              title: "Strong Academics",
              text: "Well-structured curriculum designed for academic excellence.",
            },
            {
              img: sportsImg,
              title: "Sports & Fitness",
              text: "Football, athletics, and physical activities for healthy growth.",
            },
            {
              img: culturalImg,
              title: "Cultural Programs",
              text: "Dance, music, drama, and cultural celebrations.",
            },
            {
              img: technologyImg,
              title: "Technology & ICT",
              text: "Computer education and digital literacy from early grades.",
            },
          ].map((item, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <p className="card-text text-muted">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="achievement-section text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Our Achievements</h2>
          <p className="lead mt-3">
            100% SEE results, district-level sports winners, and outstanding
            academic performance.
          </p>
          <Link to="/achievements" className="btn btn-light mt-3">
            View Achievements
          </Link>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="container my-5 text-center">
        <h2 className="fw-bold">Enroll Your Child Today</h2>
        <p className="text-muted mt-2">
          Give your child a strong academic foundation for a successful future.
        </p>
        <Link to="/admissions" className="btn btn-success cta-btn mt-3">
          Apply for Admission
        </Link>
      </section>
    </div>
  );
};

export default Home;
