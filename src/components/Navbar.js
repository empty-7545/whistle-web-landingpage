import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/Navbar.css";
import Image from "../whsitlelogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logoimage" src={Image} alt="Logo" />
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`}>
        {/* Links for routing to pages */}
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/Standard" onClick={() => setIsOpen(false)}>Our Standards</Link>
        <Link to="/Product" onClick={() => setIsOpen(false)}>Our Promises</Link>
        <Link to="/Footer" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
      <div 
        className={`hamburger ${isOpen ? "open" : ""}`} 
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
