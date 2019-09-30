import React from 'react'
import './StellarSystemDemo.css'
import {Link} from 'react-router-dom'

export default function StellarSystemDemo({stellarSystem}) {

    const largeCelestials = () => {
       return stellarSystem.largeCelestials.map((body, i) => {
            return <li key={i}>{body.name}</li>
        })
    }

    return (
        <div className="stellar-system-demo">
            <Link className="link" to={`/${stellarSystem.name}`}> {stellarSystem.name} </Link>
            <p className="space_purple">Featuring...</p>
            <ul>
                {largeCelestials()}
            </ul>
        </div>
    )
}
