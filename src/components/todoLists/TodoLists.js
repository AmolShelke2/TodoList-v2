import React from 'react';

import './TodoLists.css';

const TodoLists = props => {
  return (
    <ul className="todo-lists">
      {props.items.map(item => (
        <li key={item.id} className="list-item">
          {item.task}
          <button onClick={() => props.onDeleteTodoItem(item)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoLists;
