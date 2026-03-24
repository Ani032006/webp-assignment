import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserDisplay from "./components/UserDisplay";

function App() {
  const [user, setUser] = useState(null);

  const handleUserData = (data) => {
    setUser(data);
  };

  return (
    <div className="app">
      <h1>👤 User Registration</h1>

      <UserForm onSubmit={handleUserData} />

      {user && <UserDisplay user={user} />}
    </div>
  );
}

export default App;