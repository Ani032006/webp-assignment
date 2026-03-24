import React from "react";

export default function StudentList({ students }) {
  const getResult = (marks) => (marks >= 50 ? "Pass" : "Fail");

  const getGrade = (marks) => {
    if (marks >= 90) return "A";
    if (marks >= 75) return "B";
    if (marks >= 60) return "C";
    if (marks >= 50) return "D";
    return "F";
  };

  return (
    <div className="student-list">
      <h2>Student Results</h2>
      {students.length === 0 && <p>No students added yet.</p>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Marks Obtained</th>
            <th>Max Marks</th>
            <th>Result</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map(({ name, subject, marks, maxMarks }, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{subject}</td>
              <td>{marks}</td>
              <td>{maxMarks}</td>
              <td>{getResult(marks)}</td>
              <td>{getGrade(marks)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}