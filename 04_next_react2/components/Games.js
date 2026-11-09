"use client"
import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function AttractionsFetcher() {
    const [attractions, setAttractions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch("https://api.jsonbin.io/v3/b/6ab107ecac6210605ae5664a/latest?meta=false")
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
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {attractions.map((a) => (

                    <Card
                        key={a.id}
                        name={a.name}
                        img={a.image}
                        genre={a.genre}
                        desc={a.description}

                    />
                ))}
            </div>
        </div>
    )


}
