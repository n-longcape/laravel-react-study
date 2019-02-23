import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class H2O extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 15 };
  }

  H2Ostate = temp => {
    if (temp >= 100) {
      return "steam";
    }

    if (temp <= 0) {
      return "ice";
    }

    return "water";
  };

  PlusTemp = () => {
    this.setState({ temp: this.state.temp + 1 });
  };

  PlusTenTemp = () => {
    this.setState({ temp: this.state.temp + 10 });
  };

  MinasTemp = () => {
    this.setState({ temp: this.state.temp - 1 });
  };

  MinasTenTemp = () => {
    this.setState({ temp: this.state.temp - 10 });
  };

  render() {
    return (
      <div>
        <h2>
          {this.H2Ostate(this.state.temp)} {this.state.temp}
        </h2>
        <button onClick={this.PlusTemp}>+</button>
        <button onClick={this.PlusTenTemp}>+10</button>
        <button onClick={this.MinasTemp}>-</button>
        <button onClick={this.MinasTenTemp}>-10</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<H2O />, rootElement);
