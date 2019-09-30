import React from 'react'

import './Navbar.css'
import logo from './Stellar-Navigator-Logo.png'

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="Stellar Navigation"/>
        </div>
    )
}
