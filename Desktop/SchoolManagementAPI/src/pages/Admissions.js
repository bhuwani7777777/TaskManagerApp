import React, { useState } from "react";

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    gender: "",
    selectedClass: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admission Data:", formData);
    alert("Application Submitted Successfully!");
    // Here you can add API call to backend to save formData
  };

  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold mb-4">Student Admission Form</h1>
      <p className="text-center text-muted mb-5">
        Apply online for classes from Nursery to Grade 9
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-light p-4 rounded shadow-sm"
      >
        {/* STUDENT DETAILS */}
        <h4 className="fw-bold mb-3">Student Details</h4>
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <label className="form-label">Student Name</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter full name"
              required
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* CLASS SELECTION */}
        <div className="mb-4">
          <label className="form-label fw-bold">Select Class</label>
          <select
            name="selectedClass"
            value={formData.selectedClass}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select Class</option>
            <option value="Nursery">Nursery</option>
            <option value="KG">KG</option>
            <option value="Grade 1">Grade 1</option>
            <option value="Grade 2">Grade 2</option>
            <option value="Grade 3">Grade 3</option>
            <option value="Grade 4">Grade 4</option>
            <option value="Grade 5">Grade 5</option>
            <option value="Grade 6">Grade 6</option>
            <option value="Grade 7">Grade 7</option>
            <option value="Grade 8">Grade 8</option>
            <option value="Grade 9">Grade 9</option>
          </select>
        </div>

        {/* PARENT/GUARDIAN DETAILS */}
        <h4 className="fw-bold mb-3">Parent/Guardian Details</h4>
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <label className="form-label">Parent/Guardian Name</label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter full name"
              required
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="parentPhone"
              value={formData.parentPhone}
              onChange={handleChange}
              className="form-control"
              placeholder="+977 9XXXXXXXX"
              required
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="parentEmail"
              value={formData.parentEmail}
              onChange={handleChange}
              className="form-control"
              placeholder="example@gmail.com"
              required
            />
          </div>
        </div>

        {/* ADDRESS */}
        <div className="mb-4">
          <label className="form-label">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-control"
            rows="3"
            placeholder="Enter full address"
            required
          ></textarea>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-lg">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admissions;
