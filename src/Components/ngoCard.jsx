import React from 'react'
import './card.css'
import { BrowserRouter,Route,Routes, useNavigate } from "react-router-dom"

const NgoCard = ({details}) => {

  const navigate = useNavigate();

  return (
    <div className='card1'>
      {details.map((detail, index) => (
        <div key={index} className='card2' onClick={() => navigate(`/${detail.slug}`)}>
            <img src={detail.coverImageUrl} alt={detail.name || 'NGO image'}></img>
            <h3>{detail.name}</h3>
            <p>{detail.description}</p>
        </div>
      ))}
    </div>
  )
}

export default NgoCard