import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add forgot password API call
    console.log({ email });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body p-4">
              <h3 className="card-title text-center mb-4 fw-bold">
                Forgot Password
              </h3>
              <p className="text-center text-muted mb-4">
                Enter your email to reset your password
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaEnvelope />
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-warning w-100">
                  Reset Password
                </button>

                <p className="text-center mt-3">
                  Remember your password?{" "}
                  <Link to="/login" className="text-decoration-none">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
