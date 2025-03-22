import React from 'react';
import NgoLogo from '../assets/umeed-ke-saath-high-resolution-logo-transparent.png';
import './card.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <img src={NgoLogo} alt="Logo" className="umk-logo" />
      <div className="nav">
      <NavLink to="/" className="nav-item">Home</NavLink>
      <p className="nav-item">Volunteer</p>
      <NavLink to="/blogs" className="nav-item">Blogs</NavLink>
      </div>
    </div>
  );
};

export default Header;
