import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import { Button } from 'antd';
import { ReactMic } from 'react-mic';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [],
      listening: false,
      showSaveButton: false,
      record: false,
      recording: null,
      dataObject: {}
    }
  }
  handleStartClick() {
    this.setState({
      ...this.state,
      listening: true,
      record: true

    })
  };

  handleStopClick() {
    this.setState({
      ...this.state,
      listening: false,
      showSaveButton: true,
      record: false
    })
  };

  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob)
    this.setState({
      ...this.state,
      recording: recordedBlob
    });
  };


  //unfinished function
  //intention: create an m3u file or audio file to be stored
  //in whatever database is integrated
  onSaveClick() {
    this.setState({
      ...this.state,


    });
  }




  render() {
    let saveButton;

    if (this.state.showSaveButton) {
      saveButton = (
        <Button type="primary" >Save</Button>
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

        <div className="reactMic">
          <ReactMic
            record={this.state.record}
            className="sound=wave"
            stokeColor="#000000"
            backgroundColor="lightgrey"
            onStop={this.onStop}
          >

          </ReactMic>
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
