import React from 'react';
import './posts.css'
import Post from '../post/Post';

function Posts({posts}) {
  return (
    <div className='posts'>

     { posts.map((p, id) => (
      <Post key={id} post={p}/>
     ))
     }

    </div>
  )
}

export default Posts