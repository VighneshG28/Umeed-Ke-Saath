import React from 'react'
import './card.css'

const Footer = () => {
  return (
    <div className='footer'>
      <h1 className='footer-heading'>About us:</h1>
      <h2 className='grp-heading'>Group Members:</h2>
      <ul className='member-list'>
        <li className='member-name'>Shubham Garg</li>
        <li className='member-name'>Shubham Yadav</li>
        <li className='member-name'>Suraj Kumar</li>
        <li className='member-name'>Vighnesh Gole</li>
      </ul>
    </div>
  )
}

export default Footer
