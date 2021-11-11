import React, { Component } from 'react';

import './error-button.css';

export default class ErrorButton extends Component {

  state = {
    renderError: false
  };

  render() {

    return (
      <button
        className="error-button btn btn-danger btn-lg"
        onClick={() => this.setState({renderError: true})}>
        Throw Error
      </button>
    );
  }
}
