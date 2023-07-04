"use client";

import React, { useState } from "react";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card">
      <div
        className={`page-flip ${isFlipped ? "flipped" : ""}`}
        onClick={handleClick}>
        <div className="page front">1</div>
        <div className="page back">1</div>
      </div>
    </div>
  );
};

export default FlipCard;
