import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Di sini Anda dapat menambahkan logika autentikasi, misalnya, mengirimkan permintaan ke server.
    console.log('Username:', username);
    console.log('Password:', password);

    // Menggunakan window.location.href untuk mengarahkan ke halaman Register
    window.location.href = './pages/register';
    window.location.href = './pages/dashboard';
  };

  return (
    <div className="login-page">
      <div className="left-side">
        <h1>imagine if we have timeless moment</h1>
        <img src="/images/logo vrammer.png" alt="logo vrammer" />
      </div>
      <div className="right-side">
        <h1>Welcome</h1>
        <h2>Please Log In With Your Account</h2>
        <div className="input-wrapper">
        <div className="input-icon">
              <img src="/images/Username.png" alt="Email Icon" />
            </div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="input-wrapper">
        <div className="input-icon">
              <img src="/images/Password.png" alt="Email Icon" />
              <img src="/images/Hide.png" alt="Email Icon" />
            </div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <Link to="/dashboard">
          <button>Login</button>
        </Link>
        <Link to="/Register">Don’t Have an Account? Please Sign Up</Link>
      </div>
    </div>
  );
};

export default LoginPage;
