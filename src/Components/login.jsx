import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase-config";
import "./card.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const username = email.split("@")[0];

      await updateProfile(user, { displayName: username });

      alert(`User registered successfully! Welcome, ${user.displayName}`);
      navigate("/blogs");
    } catch (err) {
      setError(err.message);
      setTimeout(() => setError(""), 3000);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      navigate("/blogs");
    } catch (err) {
      setError(err.message);
      setTimeout(() => setError(""), 3000);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      navigate("/blogs");
    } catch (error) {
      alert("Logout Failed: " + error.message);
    }
  };

  return (
    <div className="body-container">
      <div className="login-container">
        <h2 className="login-title">Login / Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          className="input-field"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="input-field"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="buttons" onClick={handleLogin}>Login</button>
        <button className="buttons" onClick={handleSignUp}>Sign Up</button>
        <button className="buttons logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Login;
