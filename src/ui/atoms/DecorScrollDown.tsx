"use client";

import { useState } from "react";

const DecorScrollDown = () => {
  const [visible, setVisible] = useState(true);

  const hideScrollDown = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", hideScrollDown);
  }

  return (
    <div
      className={
        visible
          ? "w-full hidden lg:flex justify-center animate-bounce"
          : "w-full hidden lg:flex justify-center animate-disappear"
      }
    >
      <svg
        width="88"
        height="36"
        viewBox="0 0 88 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="44.4055"
          y1="35.613"
          x2="87.1833"
          y2="0.613022"
          stroke="white"
        />
        <line
          x1="0.308154"
          y1="0.606247"
          x2="45.0304"
          y2="35.6062"
          stroke="white"
        />
        <line
          x1="44.0183"
          y1="21.6131"
          x2="69.685"
          y2="0.613112"
          stroke="white"
        />
        <line
          x1="17.8082"
          y1="0.606247"
          x2="44.6415"
          y2="21.6062"
          stroke="white"
        />
      </svg>
    </div>
  );
};

export default DecorScrollDown;
