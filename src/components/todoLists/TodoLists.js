import React from 'react';

import './TodoLists.css';

const TodoLists = props => {
  return (
    <React.Fragment>
      <ul className="todo-lists">
        {props.items.map(item => (
          <li key={item.id} className="list-item">
            {item.task}
            <button onClick={() => props.onDeleteTodoItem(item)}>x</button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default TodoLists;
