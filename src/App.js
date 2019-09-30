import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './App.css';

import Home from './containers/Home/Home';
import Navbar from './components/Navbar/Navbar';
import StellarSystem from './components/StellarSystem/StellarSystem';

const BACKEND_URL = 'http://127.0.0.1:5000/stellarsystems'

export default class App extends Component {

  state = {
    stellarSystems: [],
    home: true
  }

  componentDidMount = () => {
    fetch(BACKEND_URL)
    .then(resp => resp.json())
    .then(results => {
      this.setState({
        stellarSystems: results.systems,
        home: false
      })
    })
  }

  render() {
    if(this.state.home) {
      return(
        <Router>
          <Redirect to="/" />
        </Router>
      )
    }
    return (
      <Router>
      <div>

          <Navbar />

          <Route path="/" exact>
            <Home stellarSystems={this.state.stellarSystems} />
          </Route>

          <Route path="/:stellarsystem">
            <StellarSystem stellarSystem={this.state.stellarSystems[0]} />
          </Route>

      </div>
      </Router>
    )
  }
}

