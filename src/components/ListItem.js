import React from "react";

export default class ListItem extends React.Component {
  render() {
    return (
      <li class="list-group-item">
        <div className={this.props.todoItem.isDone ? "done" : "undone"}>
          <span
            onClick={() => this.props.changeToDone(this.props.todoItem.index)}
            className="glyphicon glyphicon-ok icon"
          ></span>{" "}
          {this.props.todoItem.todoName}
          <button
            type="button"
            className="close"
            onClick={() => this.props.deleteTodoItem(this.props.todoItem)}
          >
            &times;
          </button>
        </div>
      </li>
    );
  }
}
