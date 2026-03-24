import React from "react";
import PropTypes from "prop-types";

function UserDisplay({ user }) {
  return (
    <div className="user-card">
      <h2>✅ Registered User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Age:</strong> {user.age}</p>
    </div>
  );
}

// ✅ PropTypes Validation
UserDisplay.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};

export default UserDisplay;