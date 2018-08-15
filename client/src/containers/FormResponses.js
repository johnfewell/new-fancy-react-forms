import React, { Component } from 'react';

class FormResponses extends Component {
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
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          TFormResponses page
        </p>
      </div>
    );
  }
}

export default FormResponses;
