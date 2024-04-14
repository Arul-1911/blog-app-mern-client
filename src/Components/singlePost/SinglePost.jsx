import React, { useEffect, useState } from 'react';
import './singlepost.css'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { Back_end_url } from '../../BackendUrl';

function SinglePost() {

  const [post,setPost] = useState({})

  const { postId } = useParams();
  const path = postId;

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${Back_end_url}/posts/${path}`);
      setPost(res.data)
    }
    getPost()
  },[path])

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo ? (
          <img
            src={post.photo}
            alt=""
            className="singlePostImg"
          />
        ) : (
          <img
            src="https://th.bing.com/th/id/R.77434e7ae1022c6d8fe8b33f1e243f6d?rik=RCpc7YHlOdGxkw&riu=http%3a%2f%2fwww.sfsbm.org%2fcomponents%2fcom_easyblog%2fthemes%2fwireframe%2fimages%2fplaceholder-image.png&ehk=EEkmGnly7MtGSD8jEaDOQ%2fOQmbio6k7%2b3Jw20vK1PZg%3d&risl=&pid=ImgRaw&r=0"
            className="postImg"
            alt="blog-img"
          />
        )}
        <h1 className="singlePostTitle">
         {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: 
            <Link to={`/?user=${post.username}`} className='link'>
            <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
}

export default SinglePost