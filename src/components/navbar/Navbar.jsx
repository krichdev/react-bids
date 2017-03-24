import React, { Component } from 'react';
const Link = require('react-router').Link;

import styles from './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <ul>
        <li>Home</li>
        <li>Featured Auctions</li>
        <li>Profile</li>
      </ul>
    );
  }
}

export default Navbar;
