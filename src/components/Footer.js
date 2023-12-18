import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" style={{ backgroundColor: '#333', color: 'white', padding: '20px 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="footer-links">
                    <a
                        href="/about"
                        style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}
                    >
                        About
                    </a>
                    <a
                        href="/privacy"
                        style={{ textDecoration: 'none', color: 'white', margin: '0 10px' }}
                    >
                        Privacy
                    </a>
                    {/* Tambahkan tautan lainnya di sini */}
                </div>

                <p>
                    Copyright 2023 | &nbsp;
                    <a
                        href="https://github.com/WidiNug23"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none', color: 'white' }}
                    >
                        Vrammer
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
