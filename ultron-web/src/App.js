import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar />
        </div>

        <h2 className="title">Ultron Web</h2>

        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
