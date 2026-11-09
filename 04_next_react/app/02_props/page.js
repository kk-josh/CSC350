import React from 'react'
import Hello from '../components/Hello'
import Card from '../components/Card'

export default function page() {
    return (
        <div>
            <Hello/>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                <Card
                    img="1.jpg"
                    name="Phi Phi Islands"
                    desc="Beautiful island in Krabi"
                />
                <Card
                    img="2.jpg"
                    name="Eiffel Tower"
                    desc="Beautiful tower in Paris"
                />
                <Card
                    img="3.jpg"
                    name="Time Square"
                    desc="New York time square"
                />
                <Card
                    img="4.jpg"
                    name="Mt.Fuji"
                    desc="Beautiful summit in Japan"
                />
            </div>
        </div>

    )
}
