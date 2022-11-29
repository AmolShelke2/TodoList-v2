import React, { useState } from 'react';
import ErrorModal from '../errorModal';

import './TodoForm.css';

export const TodoForm = props => {
  const [enteredTodo, setEnteredTodo] = useState('');

  const [error, setError] = useState();

  const enterdTodoChangeHandler = e => {
    setEnteredTodo(e.target.value);
  };

  const addTodoHandler = e => {
    e.preventDefault();

    if (enteredTodo.length === 0 || enteredTodo === '') {
      setError({
        errorTitle: 'Error occured',
        errorMessage: 'Please add a valid todo item',
      });
      return;
    }

    props.onAddTodo(enteredTodo);

    setEnteredTodo('');
  };

  const ErrorConfirmHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.errorTitle}
          errorMessage={error.errorMessage}
          onErrorConfirm={ErrorConfirmHandler}
        />
      )}

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
