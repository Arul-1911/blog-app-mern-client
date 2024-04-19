import React, { useContext, useState } from 'react';
import './settings.css';
import Sidebar from '../../Components/sidebar/Sidebar'
import { Context } from '../../Context/Context';
import { Back_end_url } from '../../BackendUrl';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  // const navigate = useNavigate()

  const { user, dispatch } = useContext(Context);
  const PF = 'http://localhost:8080/images/'

  async function handleSubmit(e) {
    e.preventDefault();

    dispatch({type:'UPDATE_START'})

    const updateUser = {
      userId: user.user._id,
      username,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put(`${Back_end_url}/users/${user.user._id}`, updateUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  }

  return (
    <div className="settings">
      <div className="settingsWrapper">
       
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src= "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM="
              
              alt="profile-pic"
            />

            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>userName</label>
          <input
            type="text"
            placeholder={user.user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>email:</label>
          <input
            type="email"
            placeholder={user.user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>password:</label>
          <input
            type="password"
            placeholder={user.user.password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span style={{ color: "green", textAlign: "center" }}>
              Profile has Been Updated...
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings