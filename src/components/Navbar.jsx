import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">MY BLOG</h1>
      <div className="navbar-links">
        <Link to="/" className="navlink">
          Home
        </Link>
        <Link to="/create-post" className="navlink">
          CreatePost
        </Link>
        <Link to="/edit-post" className="navlink">
          EditPost
        </Link>
      </div>
    </div>
  );
};
