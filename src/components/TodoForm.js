import React from "react";

export default class TodoForm extends React.Component {
  render() {
    return (
      <form className="form-inline">
        <input
          type="text"
          style={{ width: "300px" }}
          className="form-control"
          placeholder={"add new todo..."}
        />
        <button type="submit" className={"btn btn-default"}>
          ADD
        </button>
      </form>
    );
  }
}

TodoForm.defaultProps = {
  title: "Todod app",
};
