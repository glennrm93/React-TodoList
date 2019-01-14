import React from "react";

export const ListItem = props => {
  return (
    <div className="list-item">
      <span id={"item-" + props.index}>{props.item}</span>
      <a onClick={() => props.completeitem(props.index)}>
        <img
          className="tick"
          alt="done"
          src="https://www.freeiconspng.com/uploads/black-tick-icon-26.png"
        />
      </a>
      <a onClick={() => props.removeitem(props.index)}>
        <img
          className="close"
          alt="close"
          src="http://cdn.onlinewebfonts.com/svg/img_352807.png"
        />
      </a>
    </div>
  );
};
