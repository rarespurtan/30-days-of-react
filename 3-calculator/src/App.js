/** @format */

import { Component } from "react";
import KeyPad from "./Components/KeyPad";
import Result from "./Components/Result";
import "./App.css";
import CalculationHistory from "./Components/CalculationHistory";

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }

  history = new Map();

  pushToHistory = (expression, result) => {
    this.history.set(expression, result);
  };

  calculate = () => {
    try {
      let expression = this.state.result;
      this.setState({
        result: (eval(this.state.result) || "") + "",
      });
      this.pushToHistory(expression, this.state.result);
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };
  render() {
    return (
      <div>
        <div className='calc-body'>
          <h1> Calculator </h1>
          <Result result={this.state.result}></Result>
          <KeyPad onClick={this.onClick}></KeyPad>
        </div>
      </div>
    );
  }
}

export default App;
