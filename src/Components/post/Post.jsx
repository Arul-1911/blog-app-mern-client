import React from 'react';
import "./post.css";
import {Link} from 'react-router-dom'
;
function Post({post}) {
  return (
    <div className="post">
      {post.photo ? (
        <img src={post.photo} alt="blog-img" className="postImg" />
      ) : (
        <img
          src="https://th.bing.com/th/id/R.77434e7ae1022c6d8fe8b33f1e243f6d?rik=RCpc7YHlOdGxkw&riu=http%3a%2f%2fwww.sfsbm.org%2fcomponents%2fcom_easyblog%2fthemes%2fwireframe%2fimages%2fplaceholder-image.png&ehk=EEkmGnly7MtGSD8jEaDOQ%2fOQmbio6k7%2b3Jw20vK1PZg%3d&risl=&pid=ImgRaw&r=0"
          className="postImg"
          alt="blog-img"
        />
      )}
      <div className="postInfo">
        <div className="postCat">
          {post.categories.map((cat) => (
          <span className="postCategs">{cat.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className='link'>
        <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDescription">{post.desc}</p>
    </div>
  );
}

export default Post