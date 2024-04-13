import React from 'react';
import './singlepost.css'

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/533923/pexels-photo-533923.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          The post titile
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
         <span className='singlePostAuthor'>Author: <b>Arul</b></span>
         <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reiciendis odio maxime facilis ipsam temporibus, cumque nisi atque excepturi ad eos enim deleniti aspernatur blanditiis qui doloribus expedita dolorum. Saepe!
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
         <br />
         <br />
          Non reiciendis odio maxime facilis ipsam temporibus, cumque nisi atque excepturi ad eos enim deleniti aspernatur blanditiis qui doloribus expedita dolorum. Saepe!
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
         <br />
         <br />
          Non reiciendis odio maxime facilis ipsam temporibus, cumque nisi atque excepturi ad eos enim deleniti aspernatur blanditiis qui doloribus expedita dolorum. Saepe!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reiciendis odio maxime facilis ipsam temporibus, cumque nisi atque excepturi ad eos enim deleniti aspernatur blanditiis qui doloribus expedita dolorum. 
         <br />
         <br />
         Saepe!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reiciendis odio maxime facilis ipsam temporibus, cumque nisi atque excepturi ad eos enim deleniti aspernatur blanditiis qui doloribus expedita dolorum. Saepe!
         </p>
      </div>
    </div>
  );
}

export default SinglePost