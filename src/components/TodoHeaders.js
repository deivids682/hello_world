import React from "react";

export default class TodoHeaders extends React.Component {
  state = {
    attribute: "",
  };

  testaFunkcija() {
    this.setState({ attribute: "1" }, () => this.setState({ attribute: "2" }));
  }

  render() {
    return <h1>Todo List</h1>;
  }
}
