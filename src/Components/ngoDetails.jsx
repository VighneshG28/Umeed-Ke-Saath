import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaLink, FaHeart } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import './card.css'


const NgoDetail = () => {

  const [info, setInfo] = useState(null);
  // const [funds, setFunds] = useState(null);
  const { idn } = useParams();

  useEffect(() => {
    const getInfo = async () => {
      try {
        const url = `https://partners.every.org/v0.2/nonprofit/${idn}?apiKey=${import.meta.env.VITE_NGO_KEY}`;
        const res = await fetch(url);
        const datas = await res.json();
        // console.log(datas.data.nonprofit);
        setInfo(datas.data.nonprofit);
      } catch (error) {
        console.error('Error in fetching data', error);
      }
    }
    getInfo();
  },[idn])

  return (
    <div className='ngo-detail-page'>
      {info ? (
        <div className='container'>
          <img src={info.coverImageUrl} alt="NGO Cover" className='ngo-picture'/>
          <div className='title-box'>
          <img src={info.logoUrl} alt="Logo" className='ngo-logo'></img><h1 className='name'>{info.name}</h1>
          <p>{info.description}</p>
          <p>{info.nteeCodeMeaning.decileMeaning}</p>
          </div>
          <div className='motivation'>
            <p>Become a supporter!<br></br>
              visit their website and donate
            </p>
          </div>
          <p className='desc'>{info.descriptionLong}</p>
          <div className='page-footer'>
          <ImLocation /><p>{info.locationAddress}</p>
          <FaLink /><a href={info.websiteUrl} target="_blank" rel="noopener noreferrer" className='web-link'>Visit Website</a>
          </div>
        </div>
      ) : (
        <p className='loading'>Loading...</p>
      )}
    </div>
  )
}

export default NgoDetail