import React from "react";
import uuid from "node-uuid";

export class TodoForm extends React.Component {
  static propTypes = {
    addTodo: React.PropTypes.func.isRequired,
  };

  handleSubmit(event) {
    event.preventDefault();
    const text = this.refs.todoText.value;
    const id = uuid.v4();
    const todo = {text, id};
    this.props.addTodo(todo);
  }

  render() {
    return (
      <form onSubmit={::this.handleSubmit}>
        <input
          type="text"
          name="todoText"
          ref="todoText"
        />
        <input type="submit"/>
      </form>
    );
  }
}
