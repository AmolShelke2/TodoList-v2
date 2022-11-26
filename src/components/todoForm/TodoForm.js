import React, { useState } from 'react';

import './TodoForm.css';

export const TodoForm = props => {
  const [enteredTodo, setEnteredTodo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isErrorModalActive, setIsErrorModelActive] = useState(false);

  const enterdTodoChangeHandler = e => {
    setEnteredTodo(e.target.value);
    setErrorMessage('');
  };

  const addTodoHandler = e => {
    e.preventDefault();

    if (enteredTodo.length === 0 || enteredTodo === '') {
      setIsErrorModelActive(true);
      setErrorMessage('Add a valid todo');
      return;
    }

    props.onAddTodo(enteredTodo);

    setEnteredTodo('');
  };

  return (
    <React.Fragment>
      <p className={isErrorModalActive ? 'error active' : 'error'}>
        {errorMessage}
      </p>
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
    </React.Fragment>
  );
};
