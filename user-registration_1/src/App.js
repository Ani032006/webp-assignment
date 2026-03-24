import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserDisplay from "./components/UserDisplay";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <h1>User Registration</h1>
      <UserForm onSubmit={setUser} />
      {user && <UserDisplay user={user} />}
    </div>
  );
}

export default App;