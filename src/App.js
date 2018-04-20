import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/content/home'
import SuccessSignup from './components/content/successSignup'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="container">
          <Route exact path="/" component={Home}/>
          <Route path="/successignup" component={SuccessSignup}/>
        </div>
     </Router>

    );
  }
}

export default App;
