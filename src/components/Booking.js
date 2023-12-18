import React from "react";
import { Link } from "react-router-dom";

export const Booking = () => {
  return (
    <div className="LoadingC" style={{ width: 1512, height: 982, position: 'relative', background: 'white' }}>
      <div className="BookingSukses" style={{ width: 428, height: 42, left: 542, top: 375, position: 'absolute', color: '#3A7C90', fontSize: 60, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Booking Sukses</div>
      <div className="ThankYou" style={{ width: 313, height: 42, left: 599, top: 470, position: 'absolute', color: '#3A7C90', fontSize: 60, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Thank You!</div>
      <div className="Group28" style={{ width: 288, height: 44, left: 612, top: 597, position: 'absolute' }}>
        <div className="Rectangle1" style={{ width: 288, height: 44, left: 0, top: 0, position: 'absolute', background: '#00C2FF', borderRadius: 10, border: '1px white solid' }}></div>
        <Link to="/struk" style={{ textDecoration: 'none' }}>
          <div className="CheckBuktiPembayaran" style={{ width: 231.85, height: 23.83, left: 28, top: 10, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Check Bukti Pembayaran</div>
        </Link>
      </div>
    </div>
  );
};

export default Booking;
