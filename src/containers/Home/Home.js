import React from 'react'

import StellarSystemDemo from '../../components/StellarSystemDemo/StellarSystemDemo'

export default function Home(props) {
    const {stellarSystems} = props

    const stellarSystemCards = () => {
        return stellarSystems.map((stellarSystem, i) => {
            return <StellarSystemDemo 
                stellarSystem={stellarSystem} 
                key={i}
            />
        })
    }

    return (
        <div className="demo-card-container">
            {stellarSystemCards()}
        </div>
    )
}