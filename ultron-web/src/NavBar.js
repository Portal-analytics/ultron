import React, { Component } from 'react';
import './NavBar.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class NavBar extends Component {

  render() {
    var linkStyle = {
      margin: '20px'
    };

    return (

      <div className="App-header">

        <div className='links'>
          <a style={linkStyle}>Home</a>
          <a>|</a>
          <a className='aboutLink' style={linkStyle}>History</a>


        </div>


      </div>


    );
  }
}

export default NavBar;