import React from 'react';
import './settings.css';
import Sidebar from '../../Components/sidebar/Sidebar'

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-user"></i>
            </label>
            <input type="file" id='fileInput' style={{display:"none"}} />
          </div>
          <label>userName</label>
          <input type="text" placeholder='Arul' />
          <label>email:</label>
          <input type="email" placeholder='Arul@email.com' />
          <label>password:</label>
          <input type="password"/>
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings