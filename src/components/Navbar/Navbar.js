import React from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'
import logo from './Stellar-Navigator-Logo.png'

export default function Navbar({name, clearSelected, togglePlanning, currentTrip}) {
    return (
        <div className="navbar">
            <Link to="/">
                <img src={logo} alt="Stellar Navigation" onClick={clearSelected} />
            </Link>
            <h1 className='space_purple'>{name}</h1>
            {currentTrip.length >= 1 ? <button className='view-trip' onClick={togglePlanning}> Current Trip Details </button> : null}
        </div>
    )
}
