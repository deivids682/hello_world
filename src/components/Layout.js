import { TodoHeaders } from "./TodoHeaders";
import React from "react";

export function Layout(props) {
  return (
    <div id="main">
      <TodoHeaders fullName={"Davis Iljins"} />
      {props.children}
    </div>
  );
}
