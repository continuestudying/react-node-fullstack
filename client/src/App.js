import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

class App extends Component {

  auth() {
    axios.get('/auth/google').then(() => {
      console.log('Authenticated');
    });
  }

  getCurrentUser() {
    axios.get('/api/current-user').then((result) => {
      console.log("Current User : ", result);
    });
  }
  
  render() {
    return (
      <div className="App">
        <a onClick={this.auth}>Authenticate</a>
        <a onClick={this.getCurrentUser}>Current User</a>
        <a href="/auth/google">Authentication</a>
        <a href="/api/current-user">Current User</a>
      </div>
    );
  }
}

export default App;
