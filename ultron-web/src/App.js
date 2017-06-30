import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import { Button } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [],
      listening: false,
      showSaveButton: false
    }
  }
  handleStartClick() {
    this.setState({
      ...this.state,
      listening: true

    })
  };

  handleStopClick() {
    this.setState({
      ...this.state,
      listening: false,
      showSaveButton: true
    })
  };





  render() {
    let saveButton;

    if (this.state.showSaveButton) {
      saveButton = (
        <Button type="primary">Save</Button>
      );
    }


    return (


      <div className="App">

        <div className="App-header">
          <NavBar />
        </div>

        <div className="webTitle">
          <h2 className="title">Ultron Web</h2>
        </div>

        <div className="text-container">
          <div className="content">
            <h1>Your text will appear below. </h1>
            <text> Silent, es and caps — handmade, repurposed or ordered online — have become an emblem of women’s solidarity and collaboration on rights issues, similar to the pink knitted hats worn during the Women’s March after President Trump’s inauguration.
            </text>

          </div>
        </div>

        <div className="buttons">
          <Button type="primary" className="button" onClick={() => this.handleStartClick()}>Start</Button>
          <Button type="primary" className="button" onClick={() => this.handleStopClick()}>Stop</Button>
          {saveButton}

        </div>


      </div>
    );
  }
}

export default App;
