import React, { Component } from 'react';
import logo from '../../img/logo.svg'

export default class App extends Component { 
  constructor(props) {
    super(props);
    this.fileIdentifier = 'App.jsx';
    this.state = {};
  }

  shouldRenderNull = () => false;

  render = () => {
    if (this.shouldRenderNull()) return null;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  };
}

