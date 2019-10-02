import React from 'react'

export default function Jumper({body, jump}) {
    if(body.smallCelestials === undefined) {
        return (
            <button className="jumper" onClick={() => jump((body.id * 500))} >
                {body.name}
            </button>
        )
    } else {
      return (
            <button className="jumper" onClick={() => jump(body.id)} >
                {body.name}
            </button>
        )  
    }
}
