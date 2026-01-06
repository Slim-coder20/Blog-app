import React from 'react'
import { Link } from "react-router-dom"; 
import "../App.css"
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navlink">Home</Link>
      <Link to="/create-post" className="navlink">CreatePost</Link>
      <Link to="/edit-post" className="navlink">EditPost</Link>
    </div>
  )
}
