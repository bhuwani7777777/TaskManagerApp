import React from "react";
import { Link } from "react-router-dom";

const notices = [
  { id: 1, title: "Holiday Notice", date: "2026-02-05" },
  { id: 2, title: "Exam Schedule Published", date: "2026-02-10" },
];

const Notices = () => {
  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">School Notices</h2>

      <ul className="list-group">
        {notices.map((n) => (
          <Link
            key={n.id}
            to={`/notices/${n.id}`}
            className="list-group-item list-group-item-action"
          >
            <strong>{n.title}</strong> – {n.date}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Notices;
