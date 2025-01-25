import React, { useState, useEffect, useRef } from "react";
import "../assets/Global.css";

const Global = () => {
  const [isVisible, setIsVisible] = useState(false);
  const globeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (globeRef.current) {
      observer.observe(globeRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={globeRef}
      className={`spinning-globe-container ${isVisible ? "animate" : ""}`}
    >
      <p className="globe-text">Happiness. Prosperity. Delivered.
        <p className="globe-text"> All over the Country....</p>
      </p>
      

      <div className="spinning-globe">
        {/* World Map overlay inside the spinning globe */}
        <div className="world-map"></div>
        <div className="globe-threads">
          {[...Array(8)].map((_, index) => (
            <div key={index} className={`thread thread-${index + 1}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Global;
