import React from 'react';
import './topbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';


function Topbar() {
  const user = false;
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <FontAwesomeIcon className="topIcon" icon={faFacebook} />
          <FontAwesomeIcon className="topIcon" icon={faTwitter} />
          <FontAwesomeIcon className="topIcon" icon={faPinterest} />
          <FontAwesomeIcon className="topIcon" icon={faInstagram} />
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/contact">
                CONTACT
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            <li className="topListItem">{user && "LOGOUT"}</li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className='topListItem'>
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
}

export default Topbar