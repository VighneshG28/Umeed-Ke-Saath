import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaLink, FaRegHeart, FaHeart } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { db } from '@/firebase-config';
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import './card.css';
import { auth } from "../firebase-config";

const NgoDetail = () => {
  const [info, setInfo] = useState(null);
  const [user, setUser] = useState(null);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [useForm, setUseForm] = useState(false);
  const {idn} = useParams();
  const [donations] = useState((Math.random() * (10000 - 1000) + 1000).toFixed(2));

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const url = `https://partners.every.org/v0.2/nonprofit/${idn}?apiKey=${import.meta.env.VITE_NGO_KEY}`;
        const res = await fetch(url);
        const datas = await res.json();
        setInfo(datas.data.nonprofit);
      } catch (error) {
        console.error('Error in fetching data', error);
      }
    };
    getInfo();
  }, [idn]);

  useEffect(() => {
    if (idn) {
      const fetchLikes = async () => {
        const docRef = doc(db, "ngos", idn);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setLikes(docSnap.data().likes || 0);
          if (user) {
            setLiked(docSnap.data().likedBy?.includes(user.uid));
          }
        }
      };
      fetchLikes();
    }
  }, [idn, user]);

  const handleLike = async () => {
    if (!user) return alert("You must be logged in to like");
    const docRef = doc(db, "ngos", idn);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let currentLikes = docSnap.data().likes || 0;
      let likedBy = docSnap.data().likedBy || [];
      if (liked) {
        currentLikes -= 1;
        likedBy = likedBy.filter(uid => uid !== user.uid);
      } else {
        currentLikes += 1;
        likedBy.push(user.uid);
      }
      await updateDoc(docRef, { likes: currentLikes, likedBy });
      setLikes(currentLikes);
      setLiked(!liked);
    } else {
      await setDoc(docRef, { likes: 1, likedBy: [user.uid] });
      setLikes(1);
      setLiked(true);
    }
  };

  return (
    <div className='ngo-detail-page'>
      {info ? (
        <>
          <div className='container'>
            <img src={info.coverImageUrl} alt="NGO Cover" className='ngo-picture' />
            <div className='title-box'>
              <img src={info.logoUrl} alt="Logo" className='ngo-logo' />
              <h1 className='name'>{info.name}</h1>
              <p>{info.description}</p>
              <p>{info.nteeCodeMeaning?.decileMeaning}</p>
            </div>
            <div className='motivation'>
              <p>Become a supporter!<br />
                Visit their website and donate
              </p>
            </div>
            <p className='desc'>{info.descriptionLong}</p>
            <div className='page-footer'>
              <ImLocation /><p>{info.locationAddress}</p>
              <FaLink /><a href={info.websiteUrl} target="_blank" rel="noopener noreferrer" className='web-link'>Visit Website</a>
            </div>
            <div className='like-section'>
              <button className='like-btn' onClick={handleLike}>
                {liked ? <FaHeart color='red' /> : <FaRegHeart />}  {likes}
              </button>
            </div>
          </div>
          <div className="donation-section">
            <h2>Donated amount</h2>
            <h3>${donations} / $10000.00</h3>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${(donations / 10000) * 100}%` }}></div>
            </div>
          </div>
          <div onClick={() => setUseForm(true)} className="open-form">
            {useForm ? <div className="volunteer-form-container">
            <h1 className="volunteer-form-heading">Volunteering Form</h1>
            <form className="volunteer-form">
              <div className="volunteer-form-group">
                <label className="volunteer-form-label">First name</label>
                <input type="text" className="volunteer-form-input" />
              </div>
              <div className="volunteer-form-group">
                <label className="volunteer-form-label">Last name</label>
                <input type="text" className="volunteer-form-input" />
              </div>
              <div className="volunteer-form-group">
                <label className="volunteer-form-label">Date of birth</label>
                <input type="date" className="volunteer-form-input" />
              </div>
              <div className="volunteer-form-group">
                <label className="volunteer-form-label">Email</label>
                <input type="text" className="volunteer-form-input" />
              </div>
              <div className="volunteer-form-group">
                <label className="volunteer-form-label">Phone no.</label>
                <input type="text" className="volunteer-form-input" />
              </div>
              <div className="volunteer-form-group">
                <label className="volunteer-form-label">City</label>
                <input type="text" className="volunteer-form-input" />
              </div>
              <div className="volunteer-form-group">
                <label className="volunteer-form-label">Country</label>
                <input type="text" className="volunteer-form-input" />
              </div>
              <div className="volunteer-form-group">
                <label className="volunteer-form-label">Position you want to apply for</label>
                <input type="text" className="volunteer-form-input" />
              </div>
              <div className="volunteer-form-group">
                <label className="volunteer-form-label">NGO you are applying for</label>
                <input type="text" className="volunteer-form-input" defaultValue={info.name}/>
              </div>
              <div className="volunteer-form-group">
                <label className="volunteer-form-label">NGO email</label>
                <input type="text" className="volunteer-form-input" defaultValue={`${idn}@gmail.com`}/>
              </div>
              <div className="volunteer-form-group">
                <h2 className="volunteer-form-submit" 
                  onClick={() => alert("Request sent")}>Submit</h2>
              </div>
            </form>
            <h2 className='close-form' onClick={(e) =>{e.stopPropagation();
            setUseForm(false);}}>Close form</h2>
          </div> : <h2>Open volunteer form</h2>}
          </div>
      </>
      ) : (
        <p className='loading'>Loading...</p>
      )}
    </div>
  );
};

export default NgoDetail;