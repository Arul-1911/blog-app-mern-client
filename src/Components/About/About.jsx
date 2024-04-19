import React from 'react';
import './style.css'

function About() {
  return (
    <div className='container'>
      <h1 className='about-us-Header'>About Us</h1>
      <p className='about-us-heading'>Blogify - Your Platform for Sharing Ideas</p>
      <ul>
        <li>
          Create Stunning Blog Posts: Craft visually appealing and engaging blog
          posts using our rich text editor and media embedding tools.
        </li>
        <li>
          Customize Your Blog: Personalize your blog with customizable to reflect your unique style and brand.
        </li>
      </ul>
      
    </div>
  );
}

export default About