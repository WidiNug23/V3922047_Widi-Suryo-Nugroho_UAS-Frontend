import React from "react";
import { Link } from "react-router-dom";

const Soon = () => {
  const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Adjust the height as needed
    color: '#3A7C90',
    fontSize: '24px', // Adjust the font size as needed
  };

  return (
    <div style={centerStyle}>
      <div>
        <p>Coming Soon</p>
        {/* Add other content if needed */}
      </div>
    </div>
  );
};

export default Soon;
