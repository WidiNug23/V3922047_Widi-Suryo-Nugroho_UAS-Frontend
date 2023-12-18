import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="header d-flex justify-content-between">
            <img src="/images/logo vrammer.png" alt="Logo Vrammer" className="logo" />
            <div className="settings d-flex gap-2">
              <img src="/images/Setting.png" alt="Settings" className="settings-icon" />
              <img src="/images/Profile.png" alt="Profile" className="profile-icon" />
            </div>
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="form-control"
            />
            <button className="btn btn-primary">Search</button>
          </div>

          <div className="button-container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <button className="btn btn-light w-100">
                  <img src="/images/Explore.png" alt="Icon 1" className="icon" />
                  Explore
                </button>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <button className="btn btn-light w-100">
                  <img src="/images/Add.png" alt="Icon 2" className="icon" />
                  Add
                </button>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <button className="btn btn-light w-100">
                  <img src="/images/Chat.png" alt="Icon 3" className="icon" />
                  Chat
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <button className="btn btn-light w-100">
                  <img src="/images/Trending.png" alt="Icon 4" className="icon" />
                  Trending
                </button>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <button className="btn btn-light w-100">
                  <img src="/images/Jadwal.png" alt="Icon 5" className="icon" />
                  Jadwal
                </button>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <button className="btn btn-light w-100">
                  <img src="/images/Favorite.png" alt="Icon 6" className="icon" />
                  Favorite
                </button>
              </div>
            </div>
          </div>
          
          <div className="item-container">
            <div className="item-image">
              <img src="/images/Profile.png" alt="Item" />
            </div>
            <div className="item-details">
              <h2>Judul Item</h2>
              <p>Isi deskripsi</p>
              <p>Harga: Rp1.000.000.000</p>
              <Link to="/more" className="btn btn-primary">For More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
