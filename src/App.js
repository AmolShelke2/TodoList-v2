import React, { useState } from 'react';

import TodoForm from './components/todoForm';
import TodoLists from './components/todoLists/TodoLists';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = enteredTodo => {
    setTodos(prevTodos => {
      const updatedTodos = [...prevTodos];
      updatedTodos.push({
        task: enteredTodo,
        id: Math.random().toString(),
      });
      return updatedTodos;
    });
  };

  const deleteTodoItem = todoId => {
    setTodos(prevTodos => {
      const updatedTodos = prevTodos.filter(todo => todo.id !== todoId);
      return updatedTodos;
    });
  };

  return (
    <React.Fragment>
      <TodoForm onAddTodo={addTodos} />
      <TodoLists items={todos} onDeleteTodoItem={deleteTodoItem} />
    </React.Fragment>
  );
};

export default App;
