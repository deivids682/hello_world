import React from "react";
import PropTypes from "prop-types";

export function TodoHeaders({ fullName, title }) {
  return (
    <h1>
      {title} {fullName}
    </h1>
  );
}

TodoHeaders.propTypes = {
  fullName: PropTypes.string,
  title: PropTypes.string.isRequired,
};

TodoHeaders.defaultProps = {
  title: "Todo List",
};
