import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="left-side">
        {/* <h1>Welcome to Our Website</h1>
        <p>Discover amazing things with us.</p> */}
        <Link to="/login">
          <button>Login</button>
        </Link>

        <Link to="/Register">
          <button>Register</button>
        </Link>
      </div>
      <div className="right-side">
        <img src="/images/logo vrammer.png" alt="logo vrammer" />
      </div>
    </div>
  );
};

export default Landing;
