import React, { Component } from 'react'
import CytoscapeComponent from 'react-cytoscapejs';

export default class StellarSystem extends Component {

    state = {
        w: 0,
        h: 0
    }

    componentDidMount = () => {
        this.setState({
            w: window.innerWidth,
            h: window.innerHeight
        })
    }   

    render() {
        const elements = [
            { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
            { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
            { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
        ];

        return <CytoscapeComponent elements={elements} style={{ width: this.state.w, height: this.state.h }} />
    }
}
