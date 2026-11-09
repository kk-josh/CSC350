"use client";
import React, { useState } from "react";

export default function AttractionViewer() {
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


    const [index, setIndex] = useState(0);
    const attraction = attractions[index];


    const next = () => {
        setIndex((index + 1) % attractions.length);
    }

    const previous = () => {
        setIndex((index - 1 + attractions.length) % attractions.length);
    }

    const random = () => {
        setIndex(Math.floor(Math.random() * attractions.length));
    }


    return (
        <div>
            <button onClick={next}>Next</button>
            <button onClick={previous}>Previous</button>
            <button onClick={random}>Random</button>
            <h2>{attraction.name} at index: {index}</h2>
            <img src={attraction.img} alt={attraction.name} />
            <p>{attraction.detail}</p>
        </div>
    )



}
