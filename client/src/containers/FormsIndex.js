import React, { Component } from 'react';
import logo from '../logo.svg';

class FormsIndex extends Component {
  componentDidMount() {
    window.fetch('/api/forms')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
Forms Index Page        </p>
      </div>
    );
  }
}

export default FormsIndex;
