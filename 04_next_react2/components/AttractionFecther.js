"use client"
import React, { useEffect, useState } from 'react'

export default function AttractionsFetcher() {
    const [attractions, setAttractions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch("https://melivecode.com/api/attractions")
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                console.log(json);
                setAttractions(json);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            <h2>Attractions (from API)</h2>
            <ul>
                {attractions.map((a) => (
                    <li key={a.id}>
                        <h3>{a.name}</h3>
                        <img src={a.coverimage} alt={a.name} />
                        <p>{a.detail}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

}
