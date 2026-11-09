import React from 'react'

export default function page() {
    const cars = ['Toyota', 'BMW', 'Nissan', 'Porsche']

  return (
    <div>
        <h1>My Cars</h1>
        <ul>
            {cars.map((car) => (
                <li key={car}>{car}</li>
            ))
            }
        </ul>

    </div>
  )
}
