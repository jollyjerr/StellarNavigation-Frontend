import React from 'react'

export default function Jumper(props) {
    return (
        <button className="jumper" onClick={() => props.jump(props.body.id)} >
            {props.body.label}
        </button>
    )
}
