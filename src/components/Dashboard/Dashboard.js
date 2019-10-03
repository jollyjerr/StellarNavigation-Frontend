import React from 'react'
import Clock from 'react-live-clock'
import './Dashboard.css'

export default function Dashboard({currentTrip, sendCalculationRequest}) {
    return (
        <div className="dashboard">
            <h1 className="brand_name">Stellar Navigation</h1>
            <div className="clock">
               <p>Current time is</p> 
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'UTC'} /> 
                <p>UTC</p> 
            </div> 
            {currentTrip.length >= 1 
                ? <button 
                    className="calculate-button" 
                    onClick={sendCalculationRequest} > 
                    Calculate Trip Requirements
                  </button>
                : null}
        </div>
    )
}
