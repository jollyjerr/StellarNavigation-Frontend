import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

import Home from './containers/Home/Home';
import Navbar from './components/Navbar/Navbar';
import StellarSystem from './components/StellarSystem/StellarSystem';
import Planner from './components/Planner/Planner';

const BACKEND_URL = 'http://127.0.0.1:5000/'

export default class App extends Component {

  state = {
    stellarSystems: [],
    stellarSystemGraphData: [],
    selectedSystem: {},
    currentTrip: [],
    isPlanning: false
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
    let promises = systems.map(system => {
      return fetch(BACKEND_URL + `stellarsystem/${system.id}`)
    })
    Promise.all(promises)
      .then(responses => responses.forEach(resp => {
        resp.json()
        .then(results => {
              this.setState({
                stellarSystemGraphData: [results, ...this.state.stellarSystemGraphData]
              })
        })
    }))
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

  clearSelected = () => {
    this.setState({
      selectedSystem: {}
    })
  }

  startPlanning = () => {
    this.setState({
      isPlanning: true
    })
  }

  stopPlanning = () => {
    this.setState({
      isPlanning: false
    })
  }

  addStop = (id) => {
    let stop = {}
    if(id > 500) {
      stop = this.state.selectedSystem.smallCelestials.find(body => (
        body.id === id / 500
      ))
      console.log('small', stop)
    } else {
      stop = this.state.selectedSystem.largeCelestials.find(body => (
        body.id === id
      ))
      console.log()
      console.log('large', stop)
    }
    this.setState({
      currentTrip: [...this.state.currentTrip, stop]
    })
  }

  render() {
    return (
      <Router>
      <div>

          <Navbar name={this.state.selectedSystem.name} clearSelected={this.clearSelected} />

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
              startPlanning={this.startPlanning}
              stopPlanning={this.stopPlanning}
              addStop={this.addStop}
            />
          </Route>

          {this.state.isPlanning ? <Planner stellarSystems={this.state.currentTrip} /> : null}

      </div>
      </Router>
    )
  }
}

