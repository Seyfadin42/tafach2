import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer-content">
        <div className="footer-logo">
          <div className="logo">🍌 TAFACH</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="footer-section">
          <h3>SUPPORT</h3>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Contact</p>
        </div>
        <div className="footer-section">
          <h3>PHONE</h3>
          <p>+157 65  6868</p>
        </div>
        <div className="footer-section">
          <h3>EMAIL</h3>
          <p>tafach.fake@gmail.com</p>
        </div>
        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            <FontAwesomeIcon icon={faTwitter} className="icon" />
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>developed by SEYFADIN A.</p>
        <p>© 2024 TAFACH. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;