import React from "react";
import { ListItem } from "./listitem";

export const ToDoList = props => {
  return (
    <ul>
      {props.list.map((item, index) => (
        <li>
          <ListItem
            key={index}
            item={item}
            index={index}
            completeitem={props.completeitem}
            removeitem={props.removeitem}
          />
        </li>
      ))}
    </ul>
  );
};
