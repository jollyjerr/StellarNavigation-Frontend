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
    prevSystem: {},
    currentTrip: [],
    tripDetails: {},
    isPlanning: false,
    isViewingDetails: false
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
    if (!this.state.currentTrip.every(body => this.state.selectedSystem.largeCelestials.concat(this.state.selectedSystem.smallCelestials).includes(body))) {
      this.setState({
        selectSystem: {}
      })
    } else {
      this.setState({
      prevSystem: this.state.selectedSystem,
      selectedSystem: {}
    })
    }
  }

  togglePlanning = () => {
    this.setState({
      isPlanning: !this.state.isPlanning
    })
  }

  toggleDetails = () => {
    this.setState({
      isViewingDetails: !this.state.isViewingDetails
    })
  }

  addStop = (id) => { 
    let stop = {}
    if(id >= 500) {
      stop = this.state.selectedSystem.smallCelestials.find(body => (
        body.id === id / 500
      ))
    } else {
      stop = this.state.selectedSystem.largeCelestials.find(body => ( //eslint-disable-next-line
        body.id == id //hacky because cy.js is returning an odd int format
      ))
    }
    if(!this.state.currentTrip.includes(stop)) {
      this.setState({
      currentTrip: [...this.state.currentTrip, stop]
    })
    }
  }

  removeStop = (index) => {
    this.setState({
      currentTrip: [...this.state.currentTrip].filter(stop => {
        return [...this.state.currentTrip].indexOf(stop) !== index
      })
    })
    if (this.state.currentTrip.length === 1) {
      this.setState({
        isPlanning: false
      })
    }
  }

  sendCalculationRequest = () => {
      fetch(BACKEND_URL + 'trip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.currentTrip.concat(this.calculateStellarSystemChange(this.state.currentTrip)))
    })
    .then(resp => resp.json())
    .then(results => {
      this.setState({
        tripDetails: results
      })
    })
    .catch(alert)
  }

  calculateStellarSystemChange = (bodies) => {
    let solarToAlpha = {
      name: 'Solar System to Alpha Centauri System',
      semi_major_axis: 41343392165178.1
    }
    if(!bodies.every(body => this.state.prevSystem.largeCelestials.concat(this.state.prevSystem.smallCelestials).includes(body))){
      return solarToAlpha
    } else {
      return {name: '', semi_major_axis: 0}
    }
  }

  render() {
    return (
      <Router>
      <div>

          <Navbar 
            name={this.state.selectedSystem.name}
            clearSelected={this.clearSelected}
            currentTrip={this.state.currentTrip}
            togglePlanning={this.togglePlanning}
          />

          <Route path="/" exact>
            <Home 
              selectSystem={this.selectSystem}
              stellarSystems={this.state.stellarSystems}
              currentTrip={this.state.currentTrip}
              sendCalculationRequest={this.sendCalculationRequest}
              isViewingDetails={this.state.isViewingDetails}
              toggleDetails={this.toggleDetails}
              tripDetails={this.state.tripDetails}
            />
          </Route>

          <Route path="/:stellarsystem">
            <StellarSystem 
              BACKEND_URL={BACKEND_URL}
              selectSystem={this.selectSystem}
              stellarSystem={this.state.selectedSystem}
              stellarSystemData={this.state.stellarSystemGraphData[this.state.stellarSystems.indexOf(this.state.selectedSystem)]}
              togglePlanning={this.togglePlanning}
              addStop={this.addStop}
            />
          </Route>

          {this.state.isPlanning ? <Planner destinations={this.state.currentTrip} removeStop={this.removeStop} /> : null}

      </div>
      </Router>
    )
  }
}

