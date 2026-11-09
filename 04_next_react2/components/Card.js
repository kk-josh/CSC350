"use client";
import React from "react";
import './Card.css'

export default function Card({ img, name, desc, genre, likes = 0, onLike }) {
  const handleLike = () => {
    // Call the function passed from parent
    if (onLike) onLike();
  };

  return (
    <div className="card">

      <img className="image"
        src={img}
        alt={name}
      />

      <div className="content">

        <h2 className="name">{name}</h2>
        <span className="genre">{genre}</span>
        <p className="description">
          {desc}
        </p>

      </div>
      <div className="button">
        <button onClick={handleLike}>Like ({likes})</button>
      </div>


    </div>
  );
}
