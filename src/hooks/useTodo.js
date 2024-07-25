import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTodos, addTodo as addTodoAction, deleteTodo as deleteTodoAction, updateTodo as updateTodoAction } from '../store/actions/todoActions';
import { ApiService } from '../services/ApiService';
import { TodoService } from '../services/TodoService';

const useTodos = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const todoService = new TodoService();

  useEffect(() => {
    ApiService.fetchTodos().then(fetchedTodos => {
      dispatch(setTodos(fetchedTodos));
    });
  }, [dispatch]);

  const handleAddTodo = (todo) => {
    todoService.add(todo);
    dispatch(addTodoAction(todo))
  };

  const handleDeleteTodo = (id) => {
    todoService.delete(id)
    dispatch(deleteTodoAction(id));
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    todoService.update(id, updatedTodo);
    dispatch(updateTodoAction(id, updatedTodo));
  };

  const handleToggleTodo = (id) => {
    const todo = todos.find(todo => todo.id === id);
    handleUpdateTodo(id, { completed: !todo.completed });
  };

  return {
    todos,
    handleAddTodo,
    handleDeleteTodo,
    handleUpdateTodo,
    handleToggleTodo
  };
};

export default useTodos;
