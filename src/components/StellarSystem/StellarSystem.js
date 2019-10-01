import React, { Component } from 'react'
import CytoscapeComponent from 'react-cytoscapejs';

import './StellarSystem.css'
import Jumper from './Jumper';

export default class StellarSystem extends Component {
    
    state = {
        w: 0,
        h: 0,
        elements: []
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
        .then(this.props.selectSystem(window.location.href.split('/')[3]))
    }

    navigationCards = () => {
        return this.state.elements.map((body, i) => {
           return <Jumper 
                body={body.data} 
                key={i}
                jump={this.jump}
            />
        })
    }

    jump = (id) => {
        let node = this.cy.$(`#${id}`)
        this.cy.fit(node)
    }
 
    render() {
        return(
            <div>
                <menu className="navigation-menu" >
                    {this.navigationCards()}
                </menu>
                <CytoscapeComponent 
                    elements={this.state.elements} 
                    style={{ width: this.state.w, height: this.state.h }}
                    cy={(cy) => { this.cy = cy }}
                    boxSelectionEnabled={false}
                    autoungrabify={true}
                />
            </div>
        ) 
    }
}


