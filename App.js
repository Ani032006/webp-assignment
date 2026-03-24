import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  return (
    <div className="container">
      <h1>College Result Portal</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default App;