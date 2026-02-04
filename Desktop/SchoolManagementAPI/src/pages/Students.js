import React, { useEffect, useState } from "react";
import API from "../services/api";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");

  // Fetch students from API
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await API.get("/students");
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Add new student
  const addStudent = async (e) => {
    e.preventDefault();
    try {
      await API.post("/students", {
        name,
        class: studentClass,
        rollNo: parseInt(rollNo),
        email
      });
      setName("");
      setStudentClass("");
      setRollNo("");
      setEmail("");
      fetchStudents(); // refresh list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Students</h2>

      <form onSubmit={addStudent} className="mb-4">
        <div className="row g-2">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Class"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Roll No"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <button className="btn btn-primary w-100" type="submit">Add</button>
          </div>
        </div>
      </form>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Roll No</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.class}</td>
              <td>{s.rollNo}</td>
              <td>{s.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
