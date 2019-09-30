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

    parseStellarToNodes = (stellarSystem) => {
        if (stellarSystem) {
            console.log('if was triggered')
            let nodeList = []
            stellarSystem.largeCelestials.forEach(body => {
                console.log(body)
                let node = {
                    data: {
                        id: body.id,
                        label: body.name
                    },
                    position: {
                        x: body.radius / 10,
                        y: body.semi_major_axis / 1000
                    }
                }
                nodeList.push(node)
            })
            this.setState({
                elements: [nodeList]
            })
        }
    }

    componentDidMount = () => { // this will need refactored if window size changes
        this.setState({
            w: window.innerWidth,
            h: window.innerHeight
        })
        // this.parseStellarToNodes(this.props.stellarSystem)
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


