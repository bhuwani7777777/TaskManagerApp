import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ===== COMMON COMPONENTS ===== */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ===== PUBLIC PAGES ===== */
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Teachers from "./pages/Teachers";
import Gallery from "./pages/Gallery";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Admissions from "./pages/Admissions";

/* ===== AUTH PAGES ===== */
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import ForgotPassword from "./components/Auth/ForgotPassword";

/* ===== ACADEMIC PAGES ===== */
import Notices from "./components/Notices";
import NoticeDetails from "./components/NoticeDetails";
import Courses from "./components/Courses";
import ClassSchedule from "./components/ClassSchedule";
import Exams from "./components/Exams";
import Results from "./components/Results";

/* ===== APP ===== */
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Public Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admissions" element={<Admissions />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Academic */}
        <Route path="/notices" element={<Notices />} />
        <Route path="/notices/:id" element={<NoticeDetails />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/schedule" element={<ClassSchedule />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/results" element={<Results />} />

        {/* Fallback */}
        <Route
          path="*"
          element={
            <div className="container my-5 text-center">
              <h2 className="fw-bold">404</h2>
              <p>Page not found</p>
            </div>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
