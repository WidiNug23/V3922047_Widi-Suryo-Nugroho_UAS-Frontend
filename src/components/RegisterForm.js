import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTelephoneChange = (event) => {
    setTelephone(event.target.value);
  };

  const handleLogin = () => {
    // Di sini Anda dapat menambahkan logika autentikasi, misalnya, mengirimkan permintaan ke server.
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Telephone:', telephone);
  };

  return (
    <div className="login-page">
      <div className="left-side">
        <h1>imagine if we have timeless moment</h1>
        <img src="/images/logo vrammer.png" alt="logo vrammer" />
      </div>
      <div className="right-side">
        <h1>SignUp</h1>
        <h2>Create Your Account Now</h2>
        <div className="input-wrapper">
          <div className="input-icon">
            <img src="/images/Email.png" alt="Email Icon" />
          </div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

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
              <img src="/images/Call.png" alt="Email Icon" />
            </div>
          <input
            type="text"
            placeholder="Telephone"
            value={telephone}
            onChange={handleTelephoneChange}
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
          <button>Register</button>
        </Link>
         <Link to="/">Already Have an Account? Please Log In</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
