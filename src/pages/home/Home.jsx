import React, { useEffect, useState } from 'react';
import './home.css';
import Header from '../../Components/header/Header';
import Posts from '../../Components/posts/Posts';
import Sidebar from "../../Components/sidebar/Sidebar";
import axios from 'axios';
import { Back_end_url } from '../../BackendUrl';
import { useLocation } from 'react-router-dom';

function Home() {

  const [posts,setPosts] = useState([])

  const { search } = useLocation();

  useEffect(() => {
       const fetchPosts = async () => {
         try {
           const res = await axios.get(`${Back_end_url}/posts${search}`);
           setPosts(res.data); // Log the fetched data
         } catch (error) {
           console.error("Error fetching posts:", error);
         }
       };
       fetchPosts();
  },[search])

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home