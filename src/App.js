import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

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
        <Router>

          <Navbar />

          <Route path="/" exact>
            <Home stellarSystems={this.state.stellarSystems} />
          </Route>


        </Router>
      </div>
    )
  }
}

// const setUpNav = () => {
//   window.onscroll = () => { stickIt() }

//   let navbar = document.getElementById("navbar")
//   let sticky = navbar.offsetTop

//   function stickIt() {
//     if (window.pageYOffset >= sticky) {
//       navbar.classList.add("sticky")
//     } else {
//       navbar.classList.remove("sticky")
//     }
//   }
// }
