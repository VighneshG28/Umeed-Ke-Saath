import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '@/firebase-config';
import { useNavigate } from 'react-router-dom';
import './card.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const postCollectionRef = collection(db, 'posts');

  const uploadImageToImgBB = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_KEY}`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await res.json();
    return data.data.url;
  };

  const createPost = async () => {
    setUploading(true);
    let imageUrl = '';

    if (imageFile) {
      try {
        imageUrl = await uploadImageToImgBB(imageFile);
      } catch (err) {
        alert('Image upload failed!');
        setUploading(false);
        return;
      }
    }

    await addDoc(postCollectionRef, {
      title,
      postText,
      imageUrl,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });

    setUploading(false);
    navigate('/blogs');
  };

  return (
    <div className="create-post-container">
      <div className="create-post-box">
        <h1>Create Post</h1>

        <div className="input-group">
          <label>Title:</label>
          <input
            placeholder="Enter the title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Post:</label>
          <textarea
            placeholder="Enter the text"
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div>

        <div className="input-group">
          <label>Upload Image:</label>
          <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
        </div>

        <button className="submit-btn" onClick={createPost} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Submit Post'}
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
