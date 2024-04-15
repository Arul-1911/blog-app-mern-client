import React , {useContext}from 'react';
import './topbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../Context/Context';


function Topbar() {
 const { user, dispatch } = useContext(Context);
 const navigate = useNavigate()

  function handlelogout(){
    dispatch({type:'LOGOUT'});
    alert('Logged out Successfully')
    navigate('/login')
  }


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
            <li className="topListItem" onClick={handlelogout}>
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <img className="topImg" 
            src={user.profilePic} 
            alt="profile-pic" />
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
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