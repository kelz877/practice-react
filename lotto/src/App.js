import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ball from './Components/Ball'
import Lottery from './Components/Lottery'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lottery />
        <Lottery title='Test' numBalls="5"/>
      </div>
    )
  }
}

export default App;
