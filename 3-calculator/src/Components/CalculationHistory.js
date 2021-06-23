/** @format */
import React, { Component } from "react";

export default class CalculationHistory extends Component {
  constructor(props) {
    super(props);
    this.state = { history: "" };
  }
  setHistory() {
    if (this.props) {
      this.setState(this.props);
    }
  }

  render() {
    return <div> History: {this.state.history}</div>;
  }
}
