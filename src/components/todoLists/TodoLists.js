import React from 'react';

import './TodoLists.css';
import { TodoItem } from './TodoItem';

const TodoLists = props => {
  return (
    <div className="todo-lists">
      {props.items.map(item => (
        <TodoItem task={item.task} key={item.id} />
      ))}
    </div>
  );
};

export default TodoLists;
