import React from 'react';
import logo from './lillian.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return(
      <Router>
        <div>
          <Header />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="footer" exact path="/" component={Footer} />
        </div>
      </Router>
    )
  }


export default App;
