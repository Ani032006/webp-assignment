import React from "react";
import PropTypes from "prop-types";

function UserDisplay({ user }) {
  return (
    <div className="card">
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

UserDisplay.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
  }).isRequired
};

export default UserDisplay;