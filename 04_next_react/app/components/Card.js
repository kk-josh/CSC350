import React from 'react'
import './Card.css'
export default function Card({ img, name, desc, isPopular, shortName, rank, country, established }) {
    return (
        <div className="card">
            <img
                className="image"
                src={img}
                alt={name}
            />

            <div className="content">
                <h2 className="name">{name}

                    <span>
                        {isPopular ? " 🤓" : " 😵‍💫"}
                    </span>
                </h2>
                <p className="description">
                    {desc}
                </p>

                <p>
                    <strong>Country:</strong> {country}
                </p>

                <p>
                    <strong>QS Rank:</strong> #{rank}
                </p>

                <p>
                    <strong>Established:</strong> {established}
                </p>
            </div>
        </div>
    )
}
