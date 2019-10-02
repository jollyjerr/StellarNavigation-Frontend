import React from 'react'
import './StellarSystemDemo.css'
import {Link} from 'react-router-dom'

import logo from './demoLogo.png'

export default function StellarSystemDemo({stellarSystem, selectSystem}) {

    const largeCelestials = () => {
       return stellarSystem.largeCelestials.map((body, i) => {
           return i < 3 
            ? <li key={i}>{body.name}</li>
            : null     
        })
    }

    return (
        <Link to={`/${stellarSystem.stud}`} style={{ textDecoration: 'none' }}>
            <div className="stellar-system-demo" onClick={() => selectSystem(stellarSystem.name)}>
                <div className="demo-heading">
                    <h2> {stellarSystem.name} </h2>
                    <img src={logo} alt={stellarSystem.name} />
                </div>
                <div className="demo-content">
                    <p className="space_purple">Featuring...</p>
                    <ul>
                        {largeCelestials()}
                    </ul> 
                </div>
            </div>
        </Link>
    )
}
