import React from 'react'

export default function Planner({destinations}) {

    const cards = () => {
       return destinations.map((destination, i) => (
            <h2> {destination.name} key={i} </h2>
        ))
    } 

    return (
        <div className="planner">
            {cards()}
        </div>
    )
}
