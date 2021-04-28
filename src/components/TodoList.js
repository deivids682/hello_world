import React from "react";
import ListItem from "./ListItem";

class TodoList extends React.Component {
  render() {
    return <ul className="list-group">{this.props.children}</ul>;
  }
}

export default TodoList;
