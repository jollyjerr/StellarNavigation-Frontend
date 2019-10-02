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
    stellarSystemGraphData: [],
    selectedSystem: {}
  }

  componentDidMount = () => {
    this.fetchStellarSystems()
  }

  fetchStellarSystems = () => {
    fetch(BACKEND_URL + 'stellarsystems')
      .then(resp => resp.json())
      .then(results => {
        this.setState({
          stellarSystems: results.systems,
        })
        this.fetchStellarSystemCytoscapeData(results.systems)
      })
  }

  fetchStellarSystemCytoscapeData = (systems) => { //eslint-disable-next-line
    systems.map(system => {
      fetch(BACKEND_URL + `stellarsystem/${system.id}`)
        .then(resp => resp.json())
        .then(results => {
          this.setState({
            stellarSystemGraphData: [results, ...this.state.stellarSystemGraphData]
          })
        })
    })
  }

  selectSystem = (name, stud) => {
    if(stud) {
      this.setState({
        selectedSystem: this.state.stellarSystems.find(system => {
          return system.stud === stud
        })
      })
    } else {
      this.setState({
      selectedSystem: this.state.stellarSystems.find(system => {
        return system.name === name
      })
    })
    }
  }

  render() {
    return (
      <Router>
      <div>

          <Navbar />

          <Route path="/" exact>
            <Home 
              selectSystem={this.selectSystem}
              stellarSystems={this.state.stellarSystems}
            />
          </Route>

          <Route path="/:stellarsystem">
            <StellarSystem 
              BACKEND_URL={BACKEND_URL}
              selectSystem={this.selectSystem}
              stellarSystem={this.state.selectedSystem}
              stellarSystemData={this.state.stellarSystemGraphData[this.state.stellarSystems.indexOf(this.state.selectedSystem)]}
            />
          </Route>

      </div>
      </Router>
    )
  }
}

