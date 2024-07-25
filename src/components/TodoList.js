import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onDelete, onUpdate }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem 
        key={todo.id} 
        todo={todo} 
        onToggle={onToggle} 
        onDelete={onDelete} 
        onUpdate={onUpdate}
      />
    ))}
  </ul>
);

export default TodoList;
