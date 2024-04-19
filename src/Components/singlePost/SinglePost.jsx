import React, { useContext, useEffect, useState } from 'react';
import './singlepost.css'
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { Back_end_url } from '../../BackendUrl';
import { Context } from '../../Context/Context';

function SinglePost() {
  const [post, setPost] = useState({});
  const PF = "https://blog-app-mern-server-k74q.onrender.com/images/"; //backend iamge url
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [title,setTitle] = useState('');
  const [desc,setDesc] = useState('');
  const [updatemode,setUpdateMode] = useState(false);

  const { postId } = useParams();
  const path = postId;

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${Back_end_url}/posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc)

    };
    getPost();
  }, [path]);

    async function handleDelete() {
      try {
        await axios.delete(`${Back_end_url}/posts/${post._id}`, {
          data: { username: user?.user.username },
        });
        navigate('/')
      } catch (error) {
        console.log("Error response:", error.response); //error response for debugging
      }
    }

    const handleUpdate = async () => {
      try {
         await axios.put(`${Back_end_url}/posts/${post._id}`, {
            username: user?.user.username, title, desc ,
         });
         setUpdateMode(false)
        } catch (error) {
          console.log("update Error response:", error.response);
      }
    }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo ? (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        ) : (
          <img
            src="https://th.bing.com/th/id/R.77434e7ae1022c6d8fe8b33f1e243f6d?rik=RCpc7YHlOdGxkw&riu=http%3a%2f%2fwww.sfsbm.org%2fcomponents%2fcom_easyblog%2fthemes%2fwireframe%2fimages%2fplaceholder-image.png&ehk=EEkmGnly7MtGSD8jEaDOQ%2fOQmbio6k7%2b3Jw20vK1PZg%3d&risl=&pid=ImgRaw&r=0"
            className="postImg"
            alt="blog-img"
          />
        )}
        {updatemode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.user.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-regular fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fa-solid fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updatemode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updatemode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}

export default SinglePost