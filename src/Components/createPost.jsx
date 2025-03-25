import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '@/firebase-config';
import { useNavigate } from 'react-router-dom';
import "./card.css"

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("")
  const navigate = useNavigate()

  const postCollectionRef = collection(db, "posts")
  const createPost = async () => {
    await addDoc(postCollectionRef, {title, postText, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}})
    navigate("/blogs");
  }

  return (
    <div className="create-post-container">
      <div className="create-post-box">
        <h1>Create Post</h1>
        <div className="input-group">
          <label>Title:</label>
          <input placeholder="Enter the title" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Post:</label>
          <textarea placeholder="Enter the text" onChange={(e) => setPostText(e.target.value)}></textarea>
        </div>
        <button className="submit-btn" onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
}  

export default CreatePost
