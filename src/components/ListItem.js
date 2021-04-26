import React from "react";

export default class ListItem extends React.Component {
  render() {
    return (
      <li class="list-group-item">
        <div>
          <span className="glyphicon glyphicon-ok icon"></span>
          <button type="button" className="close">
            &times;
          </button>
        </div>
      </li>
    );
  }
}
