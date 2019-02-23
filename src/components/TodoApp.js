import React from "react";

import { List } from "./List";
import { AddTodo } from "./AddTodo";

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 0
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>This is TodoApp</h2>
        <AddTodo addTodo={this.addTodo} />
        <List deleteTodo={this.deleteTodo} todos={todos} />
      </div>
    );
  }

  addTodo = title => {
    const { todos, nextId } = this.state;
    this.setState({ todos: [...todos, { id: nextId, title: title }] });
    this.setState({ nextId: nextId + 1 });
  };

  deleteTodo = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => {
        return todo.id !== id;
      })
    });
  };
}
