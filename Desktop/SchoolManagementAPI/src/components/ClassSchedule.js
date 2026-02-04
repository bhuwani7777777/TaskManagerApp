import React from "react";

const ClassSchedule = () => {
  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">Class Schedule</h2>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Day</th>
            <th>Subject</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sunday</td>
            <td>Math</td>
            <td>10:00 - 11:00</td>
          </tr>
          <tr>
            <td>Monday</td>
            <td>Science</td>
            <td>11:00 - 12:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ClassSchedule;
