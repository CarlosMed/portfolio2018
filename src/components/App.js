import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Home } from './Home'
import { About } from './About'
import Work from './WorkBox/Work'
import { NavList } from './Common/NavList'

import logo from 'images/logo.svg'
import 'normalize.css'
import 'scss/index.css'

class App extends Component {
  render() {
    return (
      <Router>
        <main className="App container">
          <header className="nav">
            <Link to="/">
              <img src={logo} alt="Triangle Logo" style={{ width: 35 }} />
            </Link>
            <NavList />
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
        </main>
      </Router>
    )
  }
}

export default App
