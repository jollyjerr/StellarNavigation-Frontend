import React from 'react'
import './StellarSystemDemo.css'
import {Link} from 'react-router-dom'

export default function StellarSystemDemo({stellarSystem}) {

    return (
        <div className="stellar-system-demo">
            <Link className="link" to={`/${stellarSystem.name}`}> {stellarSystem.name} </Link>
        </div>
    )
}
