import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodoToList } from "../actions";

function TodoForm({ addTodoToList }) {
  const [todoName, setTodoName] = useState("");

  const addTodoToListAndRemoveValue = () => {
    addTodoToList(todoName);
    setTodoName("");
  };
  return (
    <div className="form-inline">
      <input
        onChange={(event) => setTodoName(event.target.value)}
        type="text"
        value={todoName}
        name="todoName"
        style={{ width: "300px" }}
        className="form-control"
        placeholder={"add new todo..."}
      />
      <button
        type="submit"
        className={"btn btn-default"}
        onClick={() => addTodoToListAndRemoveValue()}
      >
        ADD
      </button>
    </div>
  );
}

export default connect(null, { addTodoToList })(TodoForm);
