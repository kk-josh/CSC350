import React from 'react'

export default function page() {
    const car = [
        { id: 1, car: 'Toyota', year: 1985, model: 'AE86' },
        { id: 2, car: 'Nissan', year: 1990, model: 'Skyline GT-R' },
        { id: 3, car: 'BMW', year: 2021, model: 'M4 competition coupe' },
        { id: 4, car: 'Porsche', year: 2005, model: 'Cayman' },
        { id: 5, car: 'Dodge', year: 1999, model: 'Viper GTS' }
    ]
    return (
        <div className='box'>
            <h1>Cars</h1>

            <ol>
                {car.map((cars) => (
                    <li key={cars.id}>
                        Car: {cars.car},
                        Year: {cars.year},
                        Model: {cars.model}
                    </li>
                ))}
            </ol>
        </div>
    )
}
