import React, { useState } from 'react';

export const TodoForm = () => {
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

    const todoToBeAdded = {
      todoItem: enteredTodo,
      id: Math.random().toString(),
    };
    console.log(todoToBeAdded);

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
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
