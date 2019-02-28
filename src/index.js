import React from "react";
import ReactDOM from "react-dom";

import { TodoApp } from "./components/TodoApp";
import { H2O } from "./H2O";

const rootElement = document.getElementById("root");
const h2OElement = document.getElementById("h2o");
ReactDOM.render(<TodoApp />, rootElement);
ReactDOM.render(<H2O />, h2OElement)
