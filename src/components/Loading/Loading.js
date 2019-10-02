import React from 'react'

import logo from '../Navbar/Stellar-Navigator-Logo.png'

export default function Loading() {
    return (
        <div className='loading'>
            <img src={logo} alt="Loading"/>
            <h1>Loading...</h1>
        </div>
    )
}
