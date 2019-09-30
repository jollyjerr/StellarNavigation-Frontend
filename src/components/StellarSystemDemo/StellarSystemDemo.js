import React from 'react'
import './StellarSystemDemo.css'

export default function StellarSystemDemo({stellarSystem}) {

    return (
        <div className="stellar-system-demo">
            {stellarSystem.name}
        </div>
    )
}
