import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-title">
      <img src="/blog.png" alt="logo" className="navbar-logo" />
      MY BLOG
      </Link>
      <div className="navbar-links">
        <Link to="/" className="navlink">
          All Posts
        </Link>
        <Link to="/create-post" className="navlink">
          Create New Post
        </Link>
      </div>
    </div>
  );
};
