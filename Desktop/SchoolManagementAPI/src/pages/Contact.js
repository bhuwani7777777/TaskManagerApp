import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./Contact.css"; // Optional: custom styles

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus(t("pleaseFillAllFields"));
      return;
    }
    try {
      await axios.post("http://localhost:5226/api/contact", formData);
      setStatus(t("messageSent"));
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus(t("messageFailed"));
    }
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="contact-hero text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1596496050345-536f1d682c5a')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
        }}
      >
        <div className="text-center">
          <h1 className="display-5 fw-bold">{t("contactUs")}</h1>
          <p className="lead">{t("reachOutToUs")}</p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="container my-5">
        <div className="row g-4">
          {/* CONTACT FORM */}
          <div className="col-lg-6">
            <div className="card shadow p-4 border-0 hover-card">
              <h3 className="mb-4">{t("sendMessage")}</h3>
              {status && (
                <div className="alert alert-info" role="alert">
                  {status}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">{t("name")}*</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t("enterName")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">{t("email")}*</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t("enterEmail")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">{t("subject")}</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t("enterSubject")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">{t("message")}*</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={t("enterMessage")}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  {t("send")}
                </button>
              </form>
            </div>
          </div>

          {/* CONTACT INFO + MAP */}
          <div className="col-lg-6">
            <div className="card shadow p-4 border-0 hover-card mb-4">
              <h3 className="mb-3">{t("contactInfo")}</h3>
              <p>
                <strong>{t("address")}:</strong> Gauradaha, Jhapa, Nepal
              </p>
              <p>
                <strong>{t("phone")}:</strong> +977-XXXXXXXXX
              </p>
              <p>
                <strong>{t("email")}:</strong> info@goldensunrise.edu.np
              </p>
              <p>
                <strong>{t("officeHours")}:</strong> Mon-Fri, 8:00 AM - 4:00 PM
              </p>
            </div>

            {/* GOOGLE MAP */}
            <div className="card shadow border-0 hover-card">
              <iframe
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.948209676253!2d87.70537607502436!3d26.60358398337063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef8000b5fda09d%3A0x123456789abcdef!2sGolden%20Sunrise%20School!5e0!3m2!1sen!2snp!4v1600000000000!5m2!1sen!2snp"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
