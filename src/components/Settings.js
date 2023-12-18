import React from "react";
import { Link } from "react-router-dom";

export const Settings = () => {
  return (
    <div className="Settings" style={{width: 1512, height: 982, position: 'relative', background: 'white'}}>
  {/* <div className="BackButton" style={{width: 41, height: 41, left: 52, top: 40.04, position: 'absolute', borderRadius: 12, overflow: 'hidden', border: '1px black solid'}}>
    <div className="Vector1" style={{width: 10, height: 10, left: 23.07, top: 13, position: 'absolute', transform: 'rotate(45deg)', transformOrigin: '0 0', border: '2px black solid'}}></div>
  </div> */}
   <div>
      <Link to="/soon">
        <div className="Settings" style={{ width: 153, height: 19, left: 680, top: 115, position: 'absolute', color: '#3A7C90', fontSize: 40, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word',  marginLeft: 20}}>Settings</div>
      </Link>
      <Link to="/soon">
        <div className="Rectangle16" style={{ width: 692, height: 38, left: 410, top: 228, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 11,  textAlign: 'left' }} />
      </Link>
      <Link to="/soon">
        <div className="Rectangle17" style={{ width: 692, height: 38, left: 410, top: 296, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 11 }} />
      </Link>
      <Link to="/soon">
        <div className="Rectangle18" style={{ width: 692, height: 38, left: 410, top: 636, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 11 }} />
      </Link>
      <Link to="/soon">
        <div className="Rectangle19" style={{ width: 692, height: 38, left: 410, top: 568, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 11 }} />
      </Link>
      <Link to="/soon">
        <div className="Rectangle20" style={{ width: 692, height: 38, left: 410, top: 364, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 11 }} />
      </Link>
      <Link to="/soon">
        <div className="Rectangle21" style={{ width: 692, height: 38, left: 410, top: 432, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 11 }} />
      </Link>
      <Link to="/soon">
        <div className="Rectangle22" style={{ width: 692, height: 38, left: 410, top: 500, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 11 }} />
      </Link>
      <Link to="/soon">
        <div className="Rectangle23" style={{ width: 692, height: 38, left: 410, top: 704, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 11 }} />
      </Link>
      <Link to="/soon">
        <div className="Rectangle24" style={{ width: 692, height: 38, left: 410, top: 772, position: 'absolute', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 11 }} />
      </Link>
      <Link to="/soon">
        <div className="ChangeTheme" style={{ width: 235, height: 19, left: 447, top: 237, position: 'absolute', color: '#3A7C90', fontSize: 15, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Change Theme</div>
      </Link>
      <Link to="/soon">
        <div className="FontSize" style={{ width: 235, height: 19, left: 447, top: 305, position: 'absolute', color: '#3A7C90', fontSize: 15, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Font Size</div>
      </Link>
      <Link to="/">
        <div className="ChangeAccount" style={{ width: 235, height: 19, left: 447, top: 645, position: 'absolute', color: '#3A7C90', fontSize: 15, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Change Account</div>
      </Link>
      <Link to="/">
        <div className="AddAccount" style={{ width: 235, height: 19, left: 447, top: 577, position: 'absolute', color: '#3A7C90', fontSize: 15, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Add Account</div>
      </Link>
      <Link to="/soon">
        <div className="Report" style={{ width: 235, height: 19, left: 447, top: 373, position: 'absolute', color: '#3A7C90', fontSize: 15, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Report</div>
      </Link>
      <Link to="/soon">
        <div className="About" style={{ width: 235, height: 19, left: 447, top: 441, position: 'absolute', color: '#3A7C90', fontSize: 15, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>About</div>
      </Link>
      <Link to="/soon">
        <div className="Privacy" style={{ width: 235, height: 19, left: 447, top: 509, position: 'absolute', color: '#3A7C90', fontSize: 15, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Privacy</div>
      </Link>
      <Link to="/">
        <div className="LogOut" style={{ width: 235, height: 19, left: 447, top: 713, position: 'absolute', color: '#3A7C90', fontSize: 15, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Log Out</div>
      </Link>
      <Link to="/">
        <div className="DeleteAccount" style={{ width: 235, height: 19, left: 447, top: 781, position: 'absolute', color: '#FF0000', fontSize: 15, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Delete Account</div>
      </Link>
    </div>
</div>
  );
};

export default Settings;