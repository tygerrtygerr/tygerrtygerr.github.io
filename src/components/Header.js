import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="homeButton"><Link to="">Home</Link></li>
          <li className="aboutButton"><Link to="">About</Link></li>
        </ul>
      </header>
    )
  }
}
export default Header;