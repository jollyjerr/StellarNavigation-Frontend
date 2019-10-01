import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

import Home from './containers/Home/Home';
import Navbar from './components/Navbar/Navbar';
import StellarSystem from './components/StellarSystem/StellarSystem';

const BACKEND_URL = 'http://127.0.0.1:5000/'

export default class App extends Component {

  state = {
    stellarSystems: [],
    selectedSystem: {largeCelestials: []}
  }

  componentDidMount = () => {
    fetch(BACKEND_URL + 'stellarsystems')
    .then(resp => resp.json())
    .then(results => {
      this.setState({
        stellarSystems: results.systems,
        stellarSystem: this.selectSystem(window.location.href.split('/')[3])
      })
    })
  }

  selectSystem = (stud) => {
    this.setState({
        selectedSystem: this.state.stellarSystems.find(system => (system.stud === stud))
    })
  }

  render() {
    return (
      <Router>
      <div>

          <Navbar />

          <Route path="/" exact>
            <Home 
              stellarSystems={this.state.stellarSystems}
            />
          </Route>

          <Route path="/:stellarsystem">
            <StellarSystem 
              stellarSystem={this.state.selectedSystem} 
              BACKEND_URL={BACKEND_URL}
              selectSystem={this.selectSystem}
            />
          </Route>

      </div>
      </Router>
    )
  }
}

