import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DashboardAdmin = () => {
  return (
    <div className="dashboard-admin">
      <div className="flex-container">

        {/* Photographer Box */}
        <div className="dashboard-item1">
          <img className="profile-img" alt="Profile" src="images/Profile.png" />
          <div className="rectangle" />
          {/* <div className="text-wrapper-1">99</div> */}
          <div className="text-wrapper-2">Photographer</div>
          {/* <div className="text-wrapper-3">Total</div> */}
          <div className="text-wrapper-4">
            <Link to="/morePhotographer">More</Link>
          </div>
        </div>

        {/* Customer Box */}
        <div className="dashboard-item2">
          <img className="profile-img" alt="Profile" src="images/Profile.png" />
          <div className="rectangle" />
          {/* <div className="text-wrapper-5">230</div> */}
          <div className="text-wrapper-6">Customer</div>
          {/* <div className="text-wrapper-7">Total</div> */}
          <div className="text-wrapper-8">
            <Link to="/moreCustomer">More</Link>
          </div>
        </div>

        {/* Admin Box */}
        <div className="dashboard-item3">
          <img className="profile-img" alt="Profile" src="images/Profile.png" />
          <div className="rectangle" />
          {/* <div className="text-wrapper-9">5</div> */}
          <div className="text-wrapper-10">Admin</div>
          {/* <div className="text-wrapper-11">Total</div> */}
          <div className="text-wrapper-12">
            <Link to="/moreAdmin">More</Link>
          </div>
        </div>

        {/* ... (continue with the rest of your code) */}
      </div>
    </div>
  );
};

export default DashboardAdmin;
