import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="dashboard-page">
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
      />
    </div>
  
    <div className="button-container">
      <div className="button-row">
        <Link to="/explore" className="link-text">
          <div className="button-with-text">
            <button className="square-button">
              <img src="/images/Explore.png" alt="Icon 1" className="icon" />
            </button>
            Explore
          </div>
        </Link>
  
        {/* <Link to="/add" className="link-text">
          <div className="button-with-text">
            <button className="square-button">
              <img src="/images/Add.png" alt="Icon 2" className="icon" />
            </button>
            Add
          </div>
        </Link>
   */}
        <Link to="/chat" className="link-text">
          <div className="button-with-text">
            <button className="square-button">
              <img src="/images/Chat.png" alt="Icon 3" className="icon" />
            </button>
            Chat
          </div>
        </Link>
      </div>
      <div className="button-row">
        <Link to="/trending" className="link-text">
          <div className="button-with-text">
            <button className="square-button">
              <img src="/images/Trending.png" alt="Icon 4" className="icon" />
            </button>
            Trending
          </div>
        </Link>
        <Link to="/jadwal" className="link-text">
          <div className="button-with-text">
            <button className="square-button">
              <img src="/images/Jadwal.png" alt="Icon 5" className="icon" />
            </button>
            Jadwal
          </div>
        </Link>
  
        <Link to="/favorite" className="link-text">
          <div className="button-with-text">
            <button className="square-button">
              <img src="/images/Favorite.png" alt="Icon 6" className="icon" />
            </button>
            Favorite
          </div>
        </Link>
      </div>
    </div>

      <div className="divider"></div> {/* Ini adalah pembatas berbentuk persegi panjang */}
    
      <div className="item-container">
        <div className="item-image">
          <img src="/images/foto1.jpg" alt="Item" />
        </div>
        <div className="item-details">
          <h2>Team Name</h2>
          <p>We are a dynamic and creative photographer team dedicated to capturing the essence of moments through our lens.</p>
          <div className="custom-text">Rp350.000 - 500.000</div>
          <Link to="/more" className="link-text">
            For More
          </Link>
        </div>
      </div>

      <div className="item-container2">
        <div className="item-image">
          <img src="/images/foto1.jpg" alt="Item" />
        </div>
        <div className="item-details">
          <h2>Another Team Name</h2>
          <p>We are another dynamic and creative photographer team dedicated to capturing the essence of moments through our lens.</p>
          <div className="custom-text">Rp400.000 - 550.000</div>
          <Link to="/more" className="link-text">
            For More
          </Link>
        </div>
      </div>

      <div className="item-container3">
        <div className="item-image">
          <img src="/images/foto1.jpg" alt="Item" />
        </div>
        <div className="item-details">
          <h2>Another Team Name</h2>
          <p>We are another dynamic and creative photographer team dedicated to capturing the essence of moments through our lens.</p>
          <div className="custom-text">Rp400.000 - 550.000</div>
          <Link to="/more" className="link-text">
            For More
          </Link>
        </div>
      </div>
    </div>

  );
};

export default DashboardPage;
