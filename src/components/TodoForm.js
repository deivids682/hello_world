import React from "react";

export default class TodoForm extends React.Component {
  render() {
    return (
      <form className="form-inline">
        <input
          onChange={this.props.onChange}
          type="text"
          value={this.props.todoName}
          name="todoName"
          style={{ width: "300px" }}
          className="form-control"
          placeholder={"add new todo..."}
        />
        <button
          type="submit"
          className={"btn btn-default"}
          onClick={this.props.addTodoToList}
        >
          ADD
        </button>
      </form>
    );
  }
}
