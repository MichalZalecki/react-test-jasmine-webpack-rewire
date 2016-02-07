import React from "react";
import {TodoForm} from "./todos/TodoForm";
import {TodoList} from "./todos/TodoList";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  addTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }

  render() {
    return (
      <div>
        <TodoForm addTodo={ ::this.addTodo } />
        <TodoList todos={ this.state.todos } />
      </div>
    );
  }
}
