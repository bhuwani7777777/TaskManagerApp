import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="gs-navbar">
      <div className="gs-container">

        {/* Logo */}
        <NavLink to="/" className="gs-logo">
          <img src={logo} alt="Golden Sunrise School" />
          <span>Golden Sunrise</span>
        </NavLink>

        {/* Menu */}
        <ul className="gs-menu">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>

          {/* Dropdown */}
          <li className="gs-dropdown">
            <span>Academics ▾</span>
            <ul className="gs-dropdown-menu">
              <li><NavLink to="/teachers">Teachers</NavLink></li>
              <li><NavLink to="/achievements">Achievements</NavLink></li>
              <li><NavLink to="/gallery">Gallery</NavLink></li>
            </ul>
          </li>

          <li><NavLink to="/admissions" className="gs-admission-btn">
            Admissions
          </NavLink></li>

          <li><NavLink to="/contact">Contact</NavLink></li>

          {/* Register / Signup */}
          <li><NavLink to="/register" className="gs-register-btn">
            Register
          </NavLink></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
