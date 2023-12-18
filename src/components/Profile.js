import React from "react";
import { Link } from 'react-router-dom';

export const Profile = () => {
  return (
    <div className="Profile" style={{width: 1512, height: 982, position: 'relative', background: 'white'}}>
  <img className="Ellipse7" style={{width: 183, height: 183, left: 1053, top: 90, position: 'absolute', borderRadius: 9999}} src="images/pp.png" />
  <div className="Rectangle7" style={{width: 377, height: 69, left: 957, top: 723, position: 'absolute', background: 'white', borderRadius: 11, border: '1px #00C2FF solid'}} />
  <div className="Rectangle8" style={{width: 377, height: 69, left: 954, top: 478, position: 'absolute', background: 'white', borderRadius: 11, border: '1px #00C2FF solid'}} />
  <div className="Rectangle9" style={{width: 377, height: 70, left: 954, top: 600, position: 'absolute', background: 'white', borderRadius: 11, border: '1px #00C2FF solid'}} />
  <div className="Rectangle10" style={{width: 377, height: 69, left: 954, top: 350, position: 'absolute', background: 'white', borderRadius: 11, border: '1px #00C2FF solid'}} />
  <div className="Username" style={{width: 104, height: 21, left: 969, top: 501, position: 'absolute', color: 'rgba(0, 193.80, 255, 0.42)', fontSize: 17, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Username</div>
  <div className="Email" style={{width: 104, height: 20, left: 969, top: 375, position: 'absolute', color: 'rgba(0, 193.80, 255, 0.42)', fontSize: 17, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Email</div>
  <div className="Telephone" style={{width: 104, height: 20, left: 969, top: 626, position: 'absolute', color: 'rgba(0, 193.80, 255, 0.42)', fontSize: 17, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Telephone</div>
  <div className="Password" style={{width: 105, height: 20, left: 972, top: 747, position: 'absolute', color: 'rgba(0, 193.80, 255, 0.42)', fontSize: 17, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Password</div>
  <div className="Group7" style={{ width: 148.13, height: 43.89, left: 1069.21, top: 869.05, position: 'absolute' }}>
      <Link to="/dashboard" style={{ textDecoration: 'none' }}>
        <div className="Rectangle1" style={{ width: 148.13, height: 43.89, left: 0, top: 0, position: 'absolute', background: '#00C2FF', borderRadius: 10, border: '1px white solid' }}></div>
        <div className="Save" style={{ width: 46, height: 26, left: 49.79, top: 8.95, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Save</div>
      </Link>
    </div>
  <div className="Group28" style={{width: 45.72, height: 45.72, left: 1178.94, top: 223.50, position: 'absolute'}}>
    <div className="Ellipse7" style={{width: 45.72, height: 45.72, left: 0, top: 0, position: 'absolute', background: '#0066FF', borderRadius: 9999}} />
    <div className="Vector" style={{ width: 26.96, height: 28.13, left: 10.55, top: 7.03, position: 'absolute' }}>
      <img
        src="/images/edit.png" // Update the path based on your project structure
        alt="Edit Icon"
        style={{ width: '100%', height: '100%' }}
      />
    </div>  </div>
  <div className="About" style={{width: 49, height: 17, left: 171, top: 824.07, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>about</div>
  <div className="Policy" style={{width: 53, height: 19, left: 241, top: 824.07, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>policy</div>
  <div className="Privacy" style={{width: 62, height: 19, left: 323, top: 824.04, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>privacy</div>
  <div className="Information" style={{width: 97, height: 19, left: 410, top: 824.07, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>information</div>
  {/* <div className="Group17" style={{width: 155, height: 108, left: 267, top: 384.07, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 3, display: 'inline-flex'}}>
    <div className="Vrammer" style={{width: 96, height: 17, transform: 'rotate(-90deg)', transformOrigin: '0 0', color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>VRAMMER</div>
    <div className="OneSecondOneMoment" style={{width: 135, height: 108, color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', lineHeight: 25.61, wordWrap: 'break-word'}}>one second one moment</div>
  </div> */}
  <div className="ImagineIfWeHaveTimelessMoment" style={{width: 519, height: 51, left: 93, top: 115.07, position: 'absolute', color: '#00C2FF', fontSize: 32, fontFamily: 'Outfit', fontWeight: '300', wordWrap: 'break-word'}}>imagine if we have timeless moment</div>
  {/* <div className="Vector" style={{width: 52, height: 52, left: 268, top: 667.07, position: 'absolute', background: 'black'}}></div>
  <div className="Group18" style={{width: 151.01, height: 141.01, left: 20, top: 810.07, position: 'absolute'}}>
    <div className="Line23" style={{width: 141.01, height: 0, left: 0, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '10px black solid'}}></div>
    <div className="Line24" style={{width: 141.01, height: 0, left: 151.01, top: 131, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0', border: '10px black solid'}}></div>
  </div> */}
  {/* <div className="Line25" style={{width: 921.05, height: 0, left: 710.50, top: 951.05, position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '10px black solid'}}></div>
  <div className="Line26" style={{width: 141.01, height: 0, left: 567, top: 40.08, position: 'absolute', border: '10px black solid'}}></div>
  <div className="Vector" style={{width: 52, height: 52, left: 355, top: 668.07, position: 'absolute', background: 'black'}}></div>
  <div className="BackButton" style={{width: 41, height: 41, left: 52, top: 40.04, position: 'absolute', borderRadius: 12, overflow: 'hidden', border: '1px black solid'}}>
    <div className="Vector1" style={{width: 10, height: 10, left: 23.07, top: 13, position: 'absolute', transform: 'rotate(45deg)', transformOrigin: '0 0', border: '2px black solid'}}></div>
  </div> */}
</div>
  );
};

export default Profile;