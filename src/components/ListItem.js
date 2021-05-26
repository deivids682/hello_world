import React from "react";
import { connect } from "react-redux";
import { deleteTodoById, changeToDone } from "../actions";

function ListItem(props) {
  return (
    <li className="list-group-item">
      <div className={props.todoItem.isDone ? "done" : "undone"}>
        <span
          onClick={() => props.changeToDone(props.todoItem)}
          className="glyphicon glyphicon-ok icon"
        ></span>{" "}
        {props.todoItem.todoName}
        <button
          type="button"
          className="close"
          onClick={() => props.deleteTodoById(props.todoItem.id)}
        >
          &times;
        </button>
      </div>
    </li>
  );
}

export default connect(null, { deleteTodoById, changeToDone })(ListItem);
