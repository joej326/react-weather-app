import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import EnterLocation from './containers/EnterLocation/EnterLocation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EnterLocation />
      </div>
    );
  }
}

export default App;
