import React from "react";

export const Input = props => {
  return (
    <div className="input-row">
      <span>Add item:</span>
      <input id="new-item" type="text" />
      <a className="button" onClick={props.handleClick}>
        +
      </a>
    </div>
  );
};
