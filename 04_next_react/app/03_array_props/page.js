import React from 'react'
import Hello from '../components/Hello'
import Card from '../components/Card'


export default function page() {
    const attractions = [
        {
            id: 1,
            name: "Massachusetts Institute of Technology",
            detail:
                "MIT is a private university famous for science, engineering, technology and innovation.",
            coverimage: "/MIT.jpg",
            country: "United States",
            rank: 1,
            established: 1861,
            isPopular: true
        },
        {
            id: 2,
            name: "Imperial College London",
            detail:
                "Imperial College London specializes in science, engineering, medicine and business.",
            coverimage: "/Imperial.jpg",
            country: "United Kingdom",
            rank: 2,
            established: 1907,
            isPopular: false
        },
        {
            id: 3,
            name: "Stanford University",
            detail:
                "Stanford University is known for research, entrepreneurship and its connection to Silicon Valley.",
            coverimage: "/stanford.jpg",
            country: "United States",
            rank: 3,
            established: 1885,
            isPopular: true
        },
        {
            id: 4,
            name: "University of Oxford",
            detail:
                "The University of Oxford is one of the oldest universities in the world and is known for teaching and research.",
            coverimage: "/oxford.jpg",
            country: "United Kingdom",
            rank: 4,
            established: 1096,
            isPopular: true
        },
        {
            id: 5,
            name: "Harvard University",
            detail:
                "Harvard University is a private Ivy League university known for education, law, medicine and research.",
            coverimage: "/harvard.jpg",
            country: "United States",
            rank: 5,
            established: 1636,
            isPopular: true
        },
        {
            id: 6,
            name: "University of Cambridge",
            detail:
                "The University of Cambridge is a historic university recognized for academic excellence and scientific discoveries.",
            coverimage: "Cambridge.jpg",
            country: "United Kingdom",
            rank: 6,
            established: 1209,
            isPopular: false
        }
    ]


    return (
        <div className="bg">
            <Hello />

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {attractions.map((a) => (
                    <Card
                        key={a.id}  
                        img={a.coverimage}
                        name={a.name}
                        shortName={a.shortName}
                        desc={a.detail}
                        isPopular={a.isPopular}
                        rank={a.rank}
                        country={a.country}
                        established={a.established}
                    />
                ))}
            </div>
        </div>

    )


}
