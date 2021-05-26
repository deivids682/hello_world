import React from "react";
import { connect } from "react-redux";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { TodoHeaders } from "./components/TodoHeaders";
import TodoList from "./components/TodoList";
import { fetchTodoList } from "./actions";
import { useEffect } from "react";

function TodoApp({ todoList, fetchTodoList }) {
  useEffect(() => {
    fetchTodoList();
  });

  return (
    <div id="main">
      <TodoHeaders fullName={"Davis Iljins"} />
      <TodoList todoList={todoList} />
      <TodoForm />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todo.todoList,
  };
};

export default connect(mapStateToProps, { fetchTodoList })(TodoApp);
