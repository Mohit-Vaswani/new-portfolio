"use client"

import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [hiddenCursor, setHiddenCursor] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.querySelector(".custom-cursor");
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    const handleMouseEnter = () => {
      setHiddenCursor(true);
    };

    const handleMouseLeave = () => {
      setHiddenCursor(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={`custom-cursor ${hiddenCursor ? "hidden" : ""}`}></div>
  );
};

export default CustomCursor;
