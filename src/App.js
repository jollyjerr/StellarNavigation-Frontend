import React, { Component } from 'react'

import './App.css';

import Home from './containers/Home/Home';
import Navbar from './components/Navbar/Navbar';

const BACKEND_URL = 'http://127.0.0.1:5000/stellarsystems'

export default class App extends Component {

  state = {
    stellarSystems: []
  }

  componentDidMount = () => {
    fetch(BACKEND_URL)
    .then(resp => resp.json())
    .then(results => {
      this.setState({
        stellarSystems: results.systems
      })
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Home stellarSystems={this.state.stellarSystems} />
      </div>
    )
  }
}

