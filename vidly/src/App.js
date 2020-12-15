import React, { Component } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Counters from './components/Counters'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className="container">
          <Counters />
        </main>
      </>
    )
  }
}

export default App
