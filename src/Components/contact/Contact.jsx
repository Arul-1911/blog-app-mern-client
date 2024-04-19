import React from 'react';
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p className="desc">
        Our team at Blogify is committed to providing exceptional support and
        assistance to our users. Whether you have questions, feedback, or just
        want to say hello, we're here to help!
      </p>

      <div className="topLeft">
        <FontAwesomeIcon className="topIcon" icon={faFacebook} />
        <FontAwesomeIcon className="topIcon" icon={faTwitter} />
        <FontAwesomeIcon className="topIcon" icon={faPinterest} />
        <FontAwesomeIcon className="topIcon" icon={faInstagram} />
      </div>
    </div>
  );
}

export default Contact