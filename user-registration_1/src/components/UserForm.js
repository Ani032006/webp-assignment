import React, { useState } from "react";

function UserForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, age: Number(age) });
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;