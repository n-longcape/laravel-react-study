import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const returnReactElement = () => <h2>text</h2>;

const ReturnReactElement2 = (no, name) => {
  const text = `${no}番の${name}です`;
  return <h2>{text}</h2>;
};

const ReturnReactElement3 = ({ music, name }) => {
  const text = `${music}の${name}です`;
  return <h2>{text}</h2>;
};

class Human extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "ikuchan" };
  }

  buttonClick = () => {
    this.setState({ name: "maiyan" });
  };

  render() {
    return (
      <h2 onClick={this.buttonClick}>
        {this.state.name} {this.props.age}
      </h2>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Human age="22" />, rootElement);
// ReactDOM.render(ReturnReactElement2(1,'aiu'),rootElement);
// ReactDOM.render(<ReturnReactElement3 name='あいうえお' music="pops" />, rootElement);
// render(returnReactElement(), document.getElementById("root"));
