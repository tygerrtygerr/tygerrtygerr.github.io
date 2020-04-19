import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav, NavLink } from 'react-bootstrap';

const navigation = (
  <Navbar className="navBar" brand='React-Bootstrap'>
  <Nav className="navContent">
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/AboutMe'>About</NavLink>
    <NavLink to='/Projects'>Projects</NavLink>
  </Nav>
</Navbar>
)
class Header extends React.Component {
  render() {
    return (
      navigation
    )
  }
}
export default Header;