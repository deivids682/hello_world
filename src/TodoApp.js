import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoHeaders from "./components/TodoHeaders";
import TodoList from "./components/TodoList";

class TodoApp extends React.Component {
  render() {
    return (
      <div id="main">
        <TodoHeaders />
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default TodoApp;
