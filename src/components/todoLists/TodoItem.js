import React from 'react';

export const TodoItem = props => {
  const deleteHandler = () => {
    console.log('deleting');
  };

  return (
    <div className="todo-item" key={props.id}>
      <p>{props.task}</p>
      <button className="removeBtn" onClick={deleteHandler}>
        x
      </button>
    </div>
  );
};
