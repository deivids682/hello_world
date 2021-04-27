import React from "react";
import ListItem from "./ListItem";

class TodoList extends React.Component {
  render() {
    return (
      <ul className="list-group">
        {this.props?.todoList.map((todoItem, index) => {
          return (
            <ListItem
              key={index}
              todoItem={todoItem}
              deleteTodoItem={this.props.deleteTodoItem}
              changeToDone={this.props.changeToDone}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
