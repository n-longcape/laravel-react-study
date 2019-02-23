import React from "react";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.SubmitHandler}>
          <input
            type="text"
            value={this.state.title}
            name="title"
            onChange={this.ChangeHandler}
          />
          <input type="submit" value="Add Todo" />
        </form>
      </div>
    );
  }

  SubmitHandler = event => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  ChangeHandler = event => {
    const title = event.target.value;
    this.setState({ title: title });
  };
}
