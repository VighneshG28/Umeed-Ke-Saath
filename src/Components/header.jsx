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
      <NavLink to="/volunteer" className="nav-item">Volunteer</NavLink>
      <NavLink to="/blogs" className="nav-item">Blogs</NavLink>
      </div>
    </div>
  );
};

export default Header;
