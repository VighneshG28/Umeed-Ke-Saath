import React from 'react';
import Blog from '../assets/blog-pic.jpg';
import './card.css'

const PageDetailsTwo = () => {
  return (
    <div className='page-container'>
      <img src={Blog} alt='Blog' className='blog-img' />
      <div className='text-content'>
        <h1 className='blogg-heading'>Blogging</h1>
        <p className='blogg-paragraph'>You write blogs sharing your experiences.</p>
      </div>
    </div>
  );
};

export default PageDetailsTwo;
