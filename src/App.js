import React, { Component } from 'react'

import './App.css';
import Home from './containers/Home/Home';

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


  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

