import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MorePhotographer = () => {
  return (
    <div>
      <style>
        {`
          .more-photographer {
            background-color: #ffffff;
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
          }

          .more-photographer .div {
            background-color: #ffffff;
            height: 1690px;
            position: relative;
            width: 1512px;
          }

          .more-photographer .overlap {
            height: 49px;
            left: 1422px;
            position: absolute;
            top: 44px;
            width: 40px;
          }

          .more-photographer .profile {
            height: 49px;
            left: 0;
            position: absolute;
            top: 0;
            width: 40px;
          }

          /* ... (other styles) ... */

          .more-photographer .overlap-16 {
            background-color: #ff0000;
            border-radius: 12px;
            height: 46px;
            left: 1201px;
            position: absolute;
            top: 897px;
            width: 88px;
          }
        `}
      </style>

      <div className="more-photographer">
        <div className="div">
          <div className="overlap">
            <img className="profile" alt="Profile" src="profile.png" />
            <img className="profile" alt="Profile" src="image.png" />
          </div>
          <div className="overlap-group">
            <img className="iconly-bold-setting" alt="Iconly bold setting" src="setting.png" />
            <img className="iconly-bold-setting" alt="Iconly bold setting" src="setting-2.png" />
          </div>
          <div className="overlap-2">
            <div className="group">
              <div className="overlap-group-2">
                <div className="text-wrapper">VRAMMER</div>
                <div className="text-wrapper-2">one second one moment</div>
              </div>
            </div>
            <div className="group">
              <div className="overlap-group-2">
                <div className="text-wrapper">VRAMMER</div>
                <div className="text-wrapper-2">one second one moment</div>
              </div>
            </div>
          </div>
          <img className="back-button" alt="Back button" src="back-button.svg" />
          <div className="text-wrapper-3">Photographer</div>
          <div className="overlap-3">
            <img className="line" alt="Line" src="line-27.svg" />
            <div className="text-wrapper-4">Email</div>
            <div className="text-wrapper-5">Email</div>
            {/* ... (continue for other elements) */}
            <div className="overlap-16">
              <div className="text-wrapper-38">Delete</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MorePhotographer;
