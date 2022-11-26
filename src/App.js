import React, { useState } from 'react';

import TodoForm from './components/todoForm';
import TodoLists from './components/todoLists/TodoLists';

const App = () => {
  const [todos, setTodos] = useState([
    {
      task: 'Wake up',
      id: 't1',
    },
  ]);

  const addTodos = enteredTodo => {
    setTodos(prevTodos => {
      const updatedTodos = [...prevTodos];
      updatedTodos.unshift({ task: enteredTodo, id: Math.random().toString() });
      return updatedTodos;
    });
  };

  return (
    <React.Fragment>
      <TodoForm onAddTodo={addTodos} />
      <TodoLists items={todos} />
    </React.Fragment>
  );
};

export default App;
