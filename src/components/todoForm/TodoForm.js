import React, { useState } from 'react';

import './TodoForm.css';

export const TodoForm = props => {
  const [enteredTodo, setEnteredTodo] = useState('');

  const enterdTodoChangeHandler = e => {
    setEnteredTodo(e.target.value);
  };

  const addTodoHandler = e => {
    e.preventDefault();
    //     console.log(enteredTodo);

    if (enteredTodo.length === 0 || enteredTodo === '') {
      console.error('Add a valid todo');
      return;
    }

    props.onAddTodo(enteredTodo);

    setEnteredTodo('');
  };

  return (
    <div className="todo-form">
      <form onSubmit={addTodoHandler}>
        <label htmlFor="text">Enter Todo</label>
        <input
          type="text"
          onChange={enterdTodoChangeHandler}
          value={enteredTodo}
          placeholder="Enter Your Todo Task"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
