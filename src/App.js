import React, { Component } from 'react';
import Navbar from "./components/navbar/Navbar";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Penny Bid Site</h1>
      </div>
    );
  }
}

export default App;
