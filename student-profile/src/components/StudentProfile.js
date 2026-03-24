import React from "react";

function StudentProfile({ student }) {
  return (
    <div className="card">
      <img src={student.image} alt="Profile" />
      <h2>{student.name}</h2>
      <p>Register No: {student.regNo}</p>
      <p>Department: {student.department}</p>
    </div>
  );
}

export default StudentProfile;