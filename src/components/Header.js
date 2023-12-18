import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header">
      <div className="nav_menu">
        <div title="header" className="header_">
          <Link to="/">
            <img src="/images/logo vrammer.png" alt="logo" className="logo_header" />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="navbar">
          <h4>
            {/* Add Link for Profile */}
            <Link to="/profile">
              <img src="/images/Profile.png" alt="Profile" />
            </Link>
            <Link to="/settings">
            <img src="/images/Setting.png" alt="Settings" />
            </Link>
          </h4>
        </div>
      </div>
    </header>
  );
};

export default Header;
