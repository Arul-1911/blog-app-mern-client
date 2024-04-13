import React from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://th.bing.com/th/id/OIP.JkzsY2Vg4mQm4Dy1d6TnXAAAAA?rs=1&pid=ImgDetMain"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <FontAwesomeIcon className="sidebarIcon" icon={faTwitter} />
          <FontAwesomeIcon className="sidebarIcon" icon={faPinterest} />
          <FontAwesomeIcon className="sidebarIcon" icon={faFacebook} />
          <FontAwesomeIcon className="sidebarIcon" icon={faInstagram} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar