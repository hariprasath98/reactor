import React from "react";

const List = props => (
  <ul>
    {props.items.map((item, index) => (
      <li
       key={index}
       onClick={props.deleteTask.bind(this, index)}
       >
        {item}
      </li>
    ))}
  </ul>
);

export default List;
