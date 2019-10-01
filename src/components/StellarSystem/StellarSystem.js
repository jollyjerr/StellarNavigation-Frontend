import React, { Component } from 'react'
import CytoscapeComponent from 'react-cytoscapejs';

import './StellarSystem.css'

export default class StellarSystem extends Component {

    state = {
        w: 0,
        h: 0,
        elements: [
            { data: { id: 'one', label: 'Sorry' }, position: { x: 45, y: 200 }, style: {color: 'yellow'} },
            { data: { id: 'two', label: 'Something went wrong' }, position: { x: 500, y: 500 }, style: {color: 'yellow'} }
        ]
    }

    componentDidMount = () => { 
        fetch(this.props.BACKEND_URL + 'stellarsystem/2') 
        .then(resp => resp.json())
        .then(results => {
                this.setState({
                w: window.innerWidth, // kinda hacky...this will need refactored if window size changes
                h: window.innerHeight,
                elements: results
            })
        })
    }

    navigationCards = () => {
        return this.props.stellarSystem.largeCelestials.map((body, i) => {
           return <button className="jumper" key={i}> {body.name} </button>
        })
    }

    
    render() {
        return(
            <div>
                <menu className="navigation-menu" >
                    {this.props.stellarSystem ?  this.navigationCards() : null}
                </menu>
                <CytoscapeComponent 
                    elements={this.state.elements} 
                    style={{ width: this.state.w, height: this.state.h }}
                />
            </div>
        ) 
    }
}


