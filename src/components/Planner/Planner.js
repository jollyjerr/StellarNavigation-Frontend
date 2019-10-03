import React from 'react'

export default function Planner({destinations, removeStop}) {

    const cards = () => {
       return destinations.map((destination, i) => (
           <div className="destination" onClick={() => removeStop(i)} >
               <h2 key={i} > {destination.name}  </h2>
               <p> Classification: Celestial {destination.classification} </p>
               <p> Orbital Period: {destination.orbital_period} Earth days </p>
               <p> Radius: {destination.radius} km </p>
           </div>
        ))
    } 

    return (
        <div className="planner">
            {cards()}
        </div>
    )
}
