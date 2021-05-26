import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { TodoHeaders } from "./components/TodoHeaders";

import TodoList from "./components/TodoList";
import fetchWrapper from "./fetchWrapper";

class TodoApp extends React.Component {
  state = {
    todoName: "",
    todoList: [],
  };

  componentDidMount() {
    this.onChange = this.onChange.bind(this);
    this.addTodoToList = this.addTodoToList.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.changeToDone = this.changeToDone.bind(this);
  }

  onChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  addTodoToList = () => {
    this.setState({
      ...this.state,
      todoName: "",
      todoList: [
        ...this.state.todoList,
        {
          todoName: this.state.todoName,
          isDone: false,
          index: this.state.todoList.length + 1,
        },
      ],
    });
  };

  deleteTodoItem = (todoItem) => {
    const newTodoList = this.state.todoList;
    newTodoList.splice(todoItem.index - 1, 1);
    this.setState({
      ...this.state,
      todoList: newTodoList,
    });
  };

  changeToDone = (index) => {
    const newTodoList = this.state.todoList;
    newTodoList[index - 1].isDone = true;
    this.setState({
      ...this.state,
      todoList: newTodoList,
    });
  };

  render() {
    return (
      <div id="main">
        <TodoHeaders fullName={"Davis Iljins"} />
        <TodoList
          todoList={this.state.todoList}
          deleteTodoItem={this.deleteTodoItem}
          changeToDone={this.changeToDone}
        />
        <TodoForm
          //onChange={this.onChange}
          // addTodoToList={this.addTodoToList}
          todoName={this.state.todoName}
        />
      </div>
    );
  }
}

export default TodoApp;
