import React from 'react';
import Search from '../assets/search-pic.jpg';
import './card.css'

const PageDetailsOne = () => {
  return (
    <div className='page-container'>
      <div className='text-content'>
        <h1 className='search-heading'>Searching</h1>
        <p className='search-paragraph'>You can search for NGOs from around the world.</p>
      </div>
      <img src={Search} alt='Search' className='search-img' />
    </div>
  );
};

export default PageDetailsOne;
