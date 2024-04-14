import React, { useEffect, useState } from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Back_end_url } from '../../BackendUrl';

function Sidebar() {

  const [cats,setCats] = useState([]);

  useEffect(() => {
      const getCats  = async () => {
        const res = await axios.get(`${Back_end_url}/categories`);
        setCats(res.data)
      }
      getCats()
  },[])

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
          {
            cats.map((categ, id) => (
              <Link to={`/?cat=${categ.name}`}className='link'>
              <li className="sidebarListItem" key={id}>{categ.name}</li>
              </Link>
            ))
          }
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