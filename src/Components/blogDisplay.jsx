import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '@/firebase-config';
import './card.css';

const BlogDisplay = () => {
    const [postList, setPostList] = useState([]);
    const postCollectionRef = collection(db, "posts");

    useEffect(() => {
        const getPost = async () => {
            const data = await getDocs(postCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPost();
    }, []);

    return (
        <div className="blog-card-container">
            <h1 className="blog-title">Blog Posts</h1>
            <div className="blog-list">
                {postList.map((post) => (
                    <div key={post.id} className="blog-card">
                        <h2 className="blog-heading">{post.title}</h2>
                        <p className="blog-text">{post.postText}</p>
                        <h3 className="blog-author">@{post.author.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogDisplay;
