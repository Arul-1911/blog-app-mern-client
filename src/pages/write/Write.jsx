import React from 'react';
import './write.css'

function Write() {
  return (
    <div className="write">
      <img
        src="https://discover.luno.com/wp-content/uploads/hard-fork-image_blog.jpg"
        alt=""
        className="writeImg"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i
              className="writeIcon fa-solid fa-plus"
              style={{ cursor: "pointer" }}
            ></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell Your Story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write