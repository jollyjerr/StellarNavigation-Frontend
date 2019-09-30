import React, { Component } from 'react'
import CytoscapeComponent from 'react-cytoscapejs';

export default class StellarSystem extends Component {

    state = {
        w: 0,
        h: 0,
        elements: [
            { data: { id: 'one', label: 'Node 1' }, position: { x: 45, y: 200 } },
            { data: { id: 'two', label: 'Node 2' }, position: { x: 500, y: 500 } }
        ]
    }

    componentDidMount = () => { // this will need refactored if window size changes
        fetch(this.props.BACKEND_URL + 'stellarsystem/2') 
        .then(resp => resp.json())
        .then(results => {
                this.setState({
                w: window.innerWidth,
                h: window.innerHeight,
                elements: results
            })
        })
    }
    
    render() {
        return(
            <CytoscapeComponent 
            elements={this.state.elements} 
            style={{ width: this.state.w, height: this.state.h }}

             />
        ) 
    }
}


