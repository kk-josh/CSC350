"use client";
import React, { useState } from "react";
import Card from "@/components/Card";

export default function page() {
  const attractions = [
    {
      id: 1,
      name: "Phi Phi Islands",
      img: "/1.jpg",
      detail: "Phi Phi Islands are a group of islands in Thailand between Phuket and the Malacca Coastal Strait.",
    },
    {
      id: 2,
      name: "Eiffel Tower",
      img: "/2.jpg",
      detail: "Eiffel Tower is one of the most famous structures in the world, built in 1889 as a symbol of the World Fair.",
    },
    {
      id: 3,
      name: "Times Square",
      img: "/3.jpg",
      detail: "Times Square has become a global landmark and has become a symbol of New York City. This is a result of Times Square being a modern, futuristic venue, with huge advertising screens dotting its surroundings.",
    },
  ];

  const [likes, setLikes] = useState({ 1: 0, 2: 0, 3: 0 });

  const handleLike = (id) => {
   setLikes((prev) => ({
      ...prev,
      [id]: prev[id] + 1
    }));
    console.log("Liked attraction id:", id);
  };

  return (
    <div>
      <h1>Attractions</h1>

      {attractions.map((item) => (
        <Card
          key={item.id}
          img={item.img}
          name={item.name}
          desc={item.detail}
          likes={likes[item.id] || 0}
          onLike={() => handleLike(item.id)}
        />
      ))}
    </div>
  );
}
