/** @format */

import React, { Component } from "react";

export default class Result extends Component {
  render() {
    let { result } = this.props;
    return (
      <div>
        <p> {result} </p>
      </div>
    );
  }
}
