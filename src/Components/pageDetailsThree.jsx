import React from 'react';
import Volunteer from '../assets/volunteer-pic.jpg';
import './card.css'

const PageDetailsThree = () => {
  return (
    <div className='page-container'>
      <div className='text-content'>
        <h1 className='volunteer-heading'>Volunteer</h1>
        <p className='voluteer-paragraph'>You can volunteer for the ngo of your choice.</p>
      </div>
      <img src={Volunteer} alt='Volunteer' className='volunteer-img' />
    </div>
  );
};

export default PageDetailsThree;
