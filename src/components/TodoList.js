import React from "react";
import ListItem from "./ListItem";

function TodoList(props) {
  return (
    <ul className="list-group">
      {props?.todoList.map((todoItem, index) => {
        return <ListItem key={index} todoItem={todoItem} />;
      })}
    </ul>
  );
}

export default TodoList;
