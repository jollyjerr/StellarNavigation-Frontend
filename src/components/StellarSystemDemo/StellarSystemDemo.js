import React from 'react'
import './StellarSystemDemo.css'

export default function StellarSystemDemo(props) {
    return (
        <div className="stellar-system-demo">
            {props.stellarSystem.name}
        </div>
    )
}
