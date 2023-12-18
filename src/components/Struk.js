import React from "react";
import { Link } from "react-router-dom";

export const Struk = () => {
  return (
    <div className="Strukc" style={{ width: 1512, height: 982, position: 'relative', background: 'white' }}>
      <div className="Rectangle133" style={{ width: 329, height: 254, left: 591, top: 298, position: 'absolute', borderRadius: 18, border: '1px #00C2FF solid' }} />
      <div className="IdPembayaran" style={{ width: 114, height: 18, left: 647, top: 323, position: 'absolute', color: '#3A7C90', fontSize: 15, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>ID Pembayaran</div>
      <div className="SilahkanKonfirmasiBuktiPembayaranIniMelaluiChat" style={{ width: 207, height: 41, left: 652, top: 582, position: 'absolute', color: '#3A7C90', fontSize: 15, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Silahkan konfirmasi bukti pembayaran ini melalui chat</div>
      <div className="UntukMemastikanPembayaran" style={{ width: 227, height: 18, left: 642, top: 564, position: 'absolute', color: '#3A7C90', fontSize: 15, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Untuk Memastikan Pembayaran</div>
      <div style={{ width: 114, height: 18, left: 775, top: 323, position: 'absolute', color: '#3A7C90', fontSize: 15, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>80765319067</div>
      <div className="PaketPertama" style={{ width: 114, height: 18, left: 775, top: 358, position: 'absolute', color: '#3A7C90', fontSize: 15, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Paket Pertama</div>
      <div className="LinkAja" style={{ width: 114, height: 18, left: 775, top: 393, position: 'absolute', color: '#3A7C90', fontSize: 15, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Link Aja!</div>
      <div className="Package" style={{ width: 64, height: 18, left: 647, top: 358, position: 'absolute', color: '#3A7C90', fontSize: 15, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Package</div>
      <div className="BuktiPembayaran" style={{ width: 429, height: 58, left: 540, top: 202, position: 'absolute', color: '#3A7C90', fontSize: 50, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Bukti Pembayaran</div>
      <div className="Payment" style={{ width: 64, height: 18, left: 647, top: 393, position: 'absolute', color: '#3A7C90', fontSize: 15, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>Payment</div>
      <div className="TglBayar14122023" style={{ width: 78, height: 9, left: 647, top: 524, position: 'absolute', color: '#3A7C90', fontSize: 8, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word' }}>tgl bayar 14/12/2023</div>
      <img className="QrCodeAdventureTravelAlliance311" style={{ width: 110, height: 106, left: 775, top: 427, position: 'absolute' }} src="https://via.placeholder.com/110x106" />
      <Link to="/chat" style={{ textDecoration: 'none' }}>
        <div className="Rectangle125" style={{ width: 129, height: 29, left: 691, top: 672, position: 'absolute', background: '#00C2FF', borderRadius: 9 }}></div>
        <div className="Frame49" style={{ padding: 10, left: 710, top: 668, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
          <div className="ChatNow" style={{ color: 'white', fontSize: 15, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>Chat Now</div>
        </div>
      </Link>
    </div>
  );
};

export default Struk;
