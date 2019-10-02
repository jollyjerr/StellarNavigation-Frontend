import React from 'react'
import Clock from 'react-live-clock'
import './Dashboard.css'

export default function Dashboard() {
    return (
        <div className="dashboard">
            <h1 className="brand_name">Stellar Navigation</h1>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'UTC'} />
        </div>
    )
}
