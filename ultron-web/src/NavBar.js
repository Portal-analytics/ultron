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
    return (

      <div className="App-header">

        <div className='links'>
          <a href={"http://www.google.com"}>Home</a>
          <text> | </text>
          <a href={"http://www.google.com"}>History</a>


        </div>


      </div>


    );
  }
}

export default NavBar;