import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await login(formData);
  localStorage.setItem("token", res.data.token);
  navigate("/dashboard");
};

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body p-4">
              <h3 className="card-title text-center mb-4 fw-bold">
                Login
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaUserAlt />
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

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaLock />
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Link to="/forgot-password" className="text-decoration-none">
                    Forgot Password?
                  </Link>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>

                <p className="text-center mt-3">
                  Don’t have an account?{" "}
                  <Link to="/register" className="text-decoration-none">
                    Register
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

export default Login;
