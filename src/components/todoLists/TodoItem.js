import React from 'react';

export const TodoItem = props => {
  return (
    <div className="todo-item" key={props.id}>
      <p>{props.task}</p>
      <button className="removeBtn">x</button>
    </div>
  );
};
