import React, { Component } from 'react'
import CytoscapeComponent from 'react-cytoscapejs';

import './StellarSystem.css'
import Jumper from './Jumper';
import Loading from '../Loading/Loading';

export default class StellarSystem extends Component {
    
    state = {
        w: 0,
        h: 0,
        animation: false
    }

    layout = {
        name: 'concentric',
        fit: false,
        startAngle: 3/2 * Math.PI,
        clockwise: true,
        equidistant: false,
        avoidOverlap: true
    }

    componentDidMount = () => {
        this.setState({
            w: window.innerWidth, // kinda hacky...this will need refactored if window size changes
            h: window.innerHeight
        })
    }

    navigationCardsLarge = () => {
        return this.props.stellarSystem.largeCelestials.map((body, i) => {
           return <Jumper 
                body={body} 
                key={i}
                jump={this.jump}
            />
        })
    }

    navigationCardsSmall = () => {
        return this.props.stellarSystem.smallCelestials.map((body, i) => {
            return <Jumper
                body={body}
                key={i}
                jump={this.jump}
            />
        })
    }

    jump = (id) => {
        let node = this.cy.$(`#${id}`)
        this.cy.fit(node)
    }

    establishCurrentSystem = () => {
        if(!this.props.stellarSystemData) {
                this.props.selectSystem(null, window.location.href.split('/')[3])
        }
    }

    animate = () => {
        this.setState({
            animation: !this.state.animation
        })
    }
 
    render() {
        if(this.props.stellarSystemData) {
            // this.cy.layout(this.layout)
            return(
                <div>
                        <menu className="navigation-menu" >
                            {this.navigationCardsLarge()}
                        </menu>
                        <button className='navigation-button' onClick={this.animate}>
                            Animation: {this.state.animation ? 'On' : 'Off'}
                        </button>
                        <menu className="small-navigation-menu">
                            {this.navigationCardsSmall()}
                        </menu>
                        <CytoscapeComponent 
                            elements={this.props.stellarSystemData} 
                            style={{ width: this.state.w, height: this.state.h }}
                            cy={(cy) => { this.cy = cy }}
                            boxSelectionEnabled={false}
                            autoungrabify={true}
                        /> 
                </div>
            )   
        } else {
            setTimeout(() => {
                this.establishCurrentSystem()
            }, 3000);
            return <Loading />
        }
    }
}


