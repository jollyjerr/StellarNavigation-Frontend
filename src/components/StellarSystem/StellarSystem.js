import React, { Component } from 'react'
import CytoscapeComponent from 'react-cytoscapejs';

export default class StellarSystem extends Component {

    state = {
        w: 0,
        h: 0
    }

    componentDidMount = () => { // this will need refactored if window size changes
        this.setState({
            w: window.innerWidth,
            h: window.innerHeight
        })
    }
    

    render() {
        const elements = [
            { data: { id: 'one', label: 'Node 1' }, position: { x: 45, y: 200 } },
            { data: { id: 'two', label: 'Node 2' }, position: { x: 500, y: 500 } },
            { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
        ];

        return <CytoscapeComponent elements={elements} style={{ width: this.state.w, height: this.state.h }} />
    }
}
