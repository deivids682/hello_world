import React from "react";
import ListItem from "./ListItem";

class TodoList extends React.Component {
  render() {
    return (
      <ul className="list-Group">
        <ListItem />
        <ListItem />
      </ul>
    );
  }
}

export default TodoList;
