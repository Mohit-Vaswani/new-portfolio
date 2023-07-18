"use client"

import React, { useEffect } from "react";

const Stars = () => {
  useEffect(() => {
    const stars = document.querySelectorAll(".star");

    stars.forEach((star) => {
      // Randomize position within the viewport
      const randomX = Math.floor(Math.random() * window.innerWidth);
      const randomY = Math.floor(Math.random() * window.innerHeight);

      star.style.left = `${randomX}px`;
      star.style.top = `${randomY}px`;
    });
  }, []);

  return (
    <>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      <div className="star"></div>
      {/* Add more star elements as needed */}
    </>
  );
};

export default Stars;
