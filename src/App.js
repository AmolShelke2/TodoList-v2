import React, { useState } from 'react';

import TodoForm from './components/todoForm';
import TodoLists from './components/todoLists/TodoLists';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = enteredTodo => {
    let newTodos = [...todos];
    console.log(newTodos);
    newTodos.push({ task: enteredTodo, id: Math.random().toString() });
    setTodos(newTodos);
  };

  const deleteTodoItem = index => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  console.log(todos);
  return (
    <React.Fragment>
      <TodoForm onAddTodo={addTodos} />
      <TodoLists items={todos} onDeleteTodoItem={deleteTodoItem} />
    </React.Fragment>
  );
};

export default App;
