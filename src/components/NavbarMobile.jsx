import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";

// Navbar Mobile Version avec un menu burger //
const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="navbar-mobile">
        <Link to="/" className="navbar-title" onClick={closeMenu}>
          <img src="/blog.png" alt="logo" className="navbar-logo" />
          MY BLOG
        </Link>
        <button
          className={`burger-menu ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="/" className="mobile-navlink" onClick={closeMenu}>
          All Posts
        </Link>
        <Link to="/create-post" className="mobile-navlink" onClick={closeMenu}>
          Create New Post
        </Link>
      </div>
      {isOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}></div>
      )}
    </>
  );
};
export default NavbarMobile;
