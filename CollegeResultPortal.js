import React, { useState } from "react";

export default function CollegeResultPortal() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [maxMarks, setMaxMarks] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !subject || !marks || !maxMarks) {
      alert("Please fill all fields");
      return;
    }
    setSubmitted(true);
  };

  const marksNum = Number(marks);
  const maxMarksNum = Number(maxMarks);

  const result = marksNum >= 50 ? "Pass" : "Fail";

  const grade =
    marksNum >= 90 ? "A" :
    marksNum >= 75 ? "B" :
    marksNum >= 60 ? "C" :
    marksNum >= 50 ? "D" : "F";

  return (
    <div className="container">
      <h1>College Result Portal</h1>
      <form onSubmit={handleSubmit} className="form">
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
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          min="0"
        />
        <input
          type="number"
          placeholder="Maximum Marks"
          value={maxMarks}
          onChange={(e) => setMaxMarks(e.target.value)}
          min="1"
        />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="result">
          <h2>Result Details</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Subject:</strong> {subject}</p>
          <p><strong>Marks Obtained:</strong> {marksNum} / {maxMarksNum}</p>
          <p><strong>Result:</strong> {result}</p>
          <p><strong>Grade:</strong> {grade}</p>
        </div>
      )}
    </div>
  );
}