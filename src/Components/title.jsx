import React from 'react'
import background from '../assets/forest.jpg';
import './card.css'

const Title = () => {
  return (
    <div className='title-container'>
        <img src={background} alt="Title-background" className='title-img'/>
        <h1 className='title-text'>Umeed Ke Saath</h1>
        <h4 className='title-slogan'>"Aao, Saath Milkar Umeed Banayein"</h4>
    </div>
  )
}

export default Title;
