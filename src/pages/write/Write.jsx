import React, { useState, useEffect } from "react";
import "./write.css";
import axios from "axios";
import { Back_end_url } from "../../BackendUrl";
import { useNavigate } from "react-router-dom";

function Write() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [storedUser, setStoredUser] = useState(null); 

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log("Stored User:", storedUser);
    if (storedUser) {
      setStoredUser(storedUser);
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!storedUser || !storedUser.user.username) {
      alert("Error in Posting Data");
      return;
    }
    if (!title || !desc) {
      alert("Please fill all fields");
      return;
    }

    const newPost = {
      username: storedUser.user.username,
      title,
      desc,
    };

    try {
      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        newPost.photo = filename;

        await axios.post(`${Back_end_url}/upload`, data);
      }

      const res = await axios.post(`${Back_end_url}/posts`, newPost);
      navigate("/post/" + res.data._id);
    } catch (error) {
      console.log("failed to create post", error);
    }
  }

  return (
    <div className="write">
      {file && (
        <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i
              className="writeIcon fa-solid fa-plus"
              style={{ cursor: "pointer" }}
            ></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell Your Story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
