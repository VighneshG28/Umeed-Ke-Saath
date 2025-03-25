import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import BlogDisplay from "./blogDisplay";
import "./card.css";

const Blog = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
    } catch (error) {
      alert("Logout Failed: " + error.message);
    }
  };

  return (
    <div>
      <div className="blog-navbar blog-navbar-offset">
        {user ? (
          <div className="nav">
            <p className="nav-logout-button" onClick={handleLogout}>Logout</p>
            <NavLink className="blog-nav-link" to="/blogs/createpost">Post</NavLink>
          </div>
        ) : (
          <NavLink className="blog-nav-link" to="/blogs/login">Login</NavLink>
        )}
      </div>
      <div className="blog-content blog-content-offset">
        <BlogDisplay />
      </div>
    </div>
  );
};

export default Blog;
