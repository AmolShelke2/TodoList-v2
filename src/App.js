import React from 'react';

import TodoForm from './components/todoForm';
import TodoLists from './components/todoLists/TodoLists';

const App = () => {
  return (
    <React.Fragment>
      <TodoForm />
      <TodoLists />
    </React.Fragment>
  );
};

export default App;
