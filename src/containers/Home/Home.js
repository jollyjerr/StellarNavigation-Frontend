import React from 'react'

import StellarSystemDemo from '../../components/StellarSystemDemo/StellarSystemDemo'
import Dashboard from '../../components/Dashboard/Dashboard'

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
        <div className="home">
            <Dashboard />
            <div className="demo_cards">
                {stellarSystemCards()}
            </div>
        </div>
    )
}