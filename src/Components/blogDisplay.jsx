import React, { useEffect, useState } from 'react';
import { getDocs, collection, doc, updateDoc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase-config';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { auth } from "../firebase-config";
import './card.css';

const BlogDisplay = () => {
    const [postList, setPostList] = useState([]);
    const [user, setUser] = useState(null);
    const postCollectionRef = collection(db, "posts");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const getPost = async () => {
            const data = await getDocs(postCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPost();
    }, []);

    const handleLike = async (postId, isLiked, currentLikes) => {
        if (!user) return alert("You must be logged in to like a post");
        const postRef = doc(db, "posts", postId);
        let newLikes = isLiked ? currentLikes - 1 : currentLikes + 1;
        let updatedLikedBy;

        const postSnap = await getDoc(postRef);
        if (postSnap.exists()) {
            let likedBy = postSnap.data().likedBy || [];
            updatedLikedBy = isLiked ? likedBy.filter(uid => uid !== user.uid) : [...likedBy, user.uid];
            await updateDoc(postRef, { likes: newLikes, likedBy: updatedLikedBy });
        } else {
            updatedLikedBy = [user.uid];
            await setDoc(postRef, { likes: 1, likedBy: updatedLikedBy });
            newLikes = 1;
        }

        setPostList((prevList) =>
            prevList.map(post => post.id === postId ? { ...post, likes: newLikes, likedBy: updatedLikedBy } : post)
        );
    };

    return (
        <div className="blog-card-container">
            <h1 className="blog-title">Blog Posts</h1>
            <div className="blog-list">
                {postList.map((post) => {
                    const isLiked = user && post.likedBy?.includes(user.uid);
                    return (
                        <div key={post.id} className="blog-card">
                            <h2 className="blog-heading">{post.title}</h2>

                            {post.imageUrl && (
                                <img
                                    src={post.imageUrl}
                                    alt="Blog post"
                                    className="blog-image"
                                    style={{
                                        width: '100%',
                                        maxHeight: '400px',
                                        objectFit: 'cover',
                                        borderRadius: '12px',
                                        marginBottom: '1rem',
                                    }}
                                />
                            )}

                            <p className="blog-text">{post.postText}</p>
                            <h3 className="blog-author">@{post.author.name}</h3>
                            <div className="like-section">
                                <button className="like-btn" onClick={() => handleLike(post.id, isLiked, post.likes || 0)}>
                                    {isLiked ? <FaHeart color='red' /> : <FaRegHeart />} {post.likes || 0}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BlogDisplay;
