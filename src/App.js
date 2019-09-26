import React, { Component } from 'react'

import './App.css';

import Home from './containers/Home/Home';
import Navbar from './components/Navbar/Navbar';

export default class App extends Component {

  state = {
    stellarSystems: []
  }

  dummyData = [{
    id: 1,
    name: 'testSystemOne'
  }, {
    id: 2,
    name: 'testSystemTwo'
  }]

  componentDidMount = () => {
    this.setState({
      stellarSystems: this.dummyData
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

