import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import useTodos from '../hooks/useTodo';

const TodoApp = () => {

  const { todos, handleAddTodo, handleToggleTodo, handleDeleteTodo, handleUpdateTodo } = useTodos();

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList 
        todos={todos} 
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
        onUpdate={handleUpdateTodo}
      />
    </div>
  );
};

export default TodoApp;
