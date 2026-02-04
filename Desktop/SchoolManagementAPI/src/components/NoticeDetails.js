import React from "react";
import { useParams } from "react-router-dom";

const NoticeDetails = () => {
  const { id } = useParams();

  return (
    <div className="container my-5">
      <h3 className="fw-bold">Notice #{id}</h3>
      <p className="mt-3">
        This is the detailed notice content. (Dynamic later)
      </p>
    </div>
  );
};

export default NoticeDetails;
