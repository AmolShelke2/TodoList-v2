import React from 'react';

import './TodoLists.css';
import { TodoItem } from './TodoItem';

const TodoLists = props => {
  return (
    <div className="todo-lists">
      <TodoItem id={Math.random().toString()} task={'Wake up'} />
    </div>
  );
};

export default TodoLists;
