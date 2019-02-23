import React from "react";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { deleteTodo, todos } = this.props;
    const list = todos.map(todo => {
      return (
        <li>
          {todo.id} {todo.title}{" "}
          <button className="delete" onClick={() => deleteTodo(todo.id)}>
            削除
          </button>
        </li>
      );
    });
    return <ul> {list}</ul>;
  }
}
