import React from 'react';
import "./post.css";

function Post() {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/2627764/pexels-photo-2627764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCat">
          <span className="postCategs">Music</span>
          <span className="postCategs">life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt at illo. Quasi, eos nesciunt.
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt at illo. Quasi, eos nesciunt.
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt at illo. Quasi, eos nesciunt.
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt at illo. Quasi, eos nesciunt.
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt at illo. Quasi, eos nesciunt.
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt at illo. Quasi, eos nesciunt.
         </p>
    </div>
  );
}

export default Post