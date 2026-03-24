import React, { useState } from "react";

export default function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [maxMarks, setMaxMarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !subject || !marks || !maxMarks) {
      alert("Please fill all fields");
      return;
    }
    addStudent({
      name,
      subject,
      marks: Number(marks),
      maxMarks: Number(maxMarks),
    });
    setName("");
    setSubject("");
    setMarks("");
    setMaxMarks("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="number"
        placeholder="Marks Obtained"
        min="0"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />
      <input
        type="number"
        placeholder="Maximum Marks"
        min="1"
        value={maxMarks}
        onChange={(e) => setMaxMarks(e.target.value)}
      />
      <button type="submit">Add Student</button>
    </form>
  );
}