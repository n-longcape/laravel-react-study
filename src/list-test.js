import React from "react";
import ReactDOM from "react-dom";

const todos = [
  { id: 1, title: "test1" },
  { id: 2, title: "test2" },
  { id: 3, title: "test3" },
  { id: 4, title: "test4" }
];

const deleteId = 3;

const DeletedArray = todos.filter(todo => todo.id !== deleteId);

console.log(DeletedArray);

const Todos = ({ todos }) => {
  const list = todos.map(todo => {
    return (
      <li>
        {todo.id} {todo.title}
      </li>
    );
  });
  return <ul>{list}</ul>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Todos todos={todos} />, rootElement);
