import React from "react";
import "../assets/Herosection.css";
import "../assets/Navbar.css"
import Image from "../whsitlelogo.png"

const Herosection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        
        <div className="hero-content">
         <div className="logo"><img className="logoimage" src={Image}/></div>
          <h1>Tamilnadu's Emerging B2B Market Place for <span className="horeca-box">Ho Re Ca</span> Business </h1>
          <p>New Retail Platform for food and grocery</p>
       
        </div>
      </div>
    </div>
  );
};


export default Herosection;