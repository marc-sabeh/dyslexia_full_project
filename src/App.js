import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends Component {
  render(){
  return (
    <React.Fragment>
        {/* <Navbar></Navbar> */}
        <Switch>
        <Route exact path="/" component={Home}></Route>
        </Switch>     
      </React.Fragment>
  );
  };
}

export default App;
