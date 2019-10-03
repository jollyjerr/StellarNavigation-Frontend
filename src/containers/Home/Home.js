import React from 'react'

import StellarSystemDemo from '../../components/StellarSystemDemo/StellarSystemDemo'
import Dashboard from '../../components/Dashboard/Dashboard'

export default function Home(props) {
    const {stellarSystems, selectSystem, currentTrip, sendCalculationRequest} = props

    const stellarSystemCards = () => {
        return stellarSystems.map((stellarSystem, i) => {
            return <StellarSystemDemo 
                stellarSystem={stellarSystem} 
                key={i}
                selectSystem={selectSystem}
            />
        })
    }

    return (
        <div className="home">
            <Dashboard 
                currentTrip={currentTrip} 
                sendCalculationRequest={sendCalculationRequest}
            />
            <div className="demo_cards">
                {stellarSystemCards()}
            </div>
        </div>
    )
}