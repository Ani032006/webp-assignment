import React from "react";
import StudentProfile from "./components/StudentProfile";

function App() {
  const student = {
    name: "ANI",
    regNo: "24BAI1490",
    department: "Computer Science",
    image: "https://via.placeholder.com/150"
  };

  return (
    <div className="app">
      <h1>Student Profile</h1>
      <StudentProfile student={student} />
    </div>
  );
}

export default App;