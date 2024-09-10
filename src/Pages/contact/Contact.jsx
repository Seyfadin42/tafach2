import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'; // Import custom styles

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>GET EXCLUSIVE DISCOUNT</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum ratione, tempora quisquam quibusdam repudiandae illo cum ullam fugit facere accusamus eaque ipsa nemo deserunt quo omnis vero esse tenetur.
        </p>
      </div>
      <div className="contact-form">
        <div className="input-container">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <input type="email" placeholder='Email address' />
        </div>
        <button className="subscribe-button">
          <FontAwesomeIcon icon={faPaperPlane} className="icon" />
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Contact;