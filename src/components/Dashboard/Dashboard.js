import React from 'react'
import Clock from 'react-live-clock'
import './Dashboard.css'

export default function Dashboard({currentTrip, sendCalculationRequest, isViewingDetails, toggleDetails, tripDetails}) {

    const handleClick = () => {
        sendCalculationRequest()
        toggleDetails()
    }

    const names = () => {
        if(tripDetails.names){
            return tripDetails.names.map(name => (<li className="name"> {name} </li>))
        }
    }

    return (
        <div className="dashboard">
            <h1 className="brand_name">Stellar Navigation</h1>
            <div className="clock">
               <p>Current time is</p> 
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'UTC'} /> 
                <p>UTC</p> 
            </div> 
            {currentTrip.length >= 1 && !isViewingDetails
                ? <button 
                    className="calculate-button" 
                    onClick={handleClick} > 
                    Calculate Trip Requirements
                  </button>
                : null}
            {isViewingDetails 
                ? <div className="trip-details">
                    Your Trip:
                    <ul>
                        {names()}
                    </ul>
                    <h4> Shortest Possible Trip Distance: {tripDetails.distance} AU </h4>
                    <h4> Fastest Possible Travel Time: {tripDetails.time} Light Hours </h4>
                    <button className="trip-details-back" onClick={toggleDetails} >Back</button>
                </div>
                : null }
        </div>
    )
}
