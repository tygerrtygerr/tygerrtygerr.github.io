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
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

function App() {
    return(
      <Router>
        <div>
          <Header />
          <Switch>
            <Route name="home" exact path="/" component={HomePage} />
            <Route name="footer" exact path="/" component={Footer} />
            <Route name="projects" exact path="/Projects" component={Projects} />
            <Route name="aboutMe" exact path="/AboutMe" component={AboutMe} />
          </Switch>
        </div>
      </Router>
    )
  }


export default App;
