import React from 'react'

export default function page() {
    const p1 = {name: 'Kaung','age': 20}
    const p2 = {name: 'Khant','age': 21}
    return (
        <div>
            <h1>Members</h1>
            <ol>
                <li>Name: {p1.name}, Age: {p1.age}</li>
                <li>Name: {p2.name}, Age: {p2.age}</li>
            </ol>
        </div>
    )
}
