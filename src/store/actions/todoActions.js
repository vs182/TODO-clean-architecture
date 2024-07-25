export const ADD_TODO = 'ADD_TODO';
export const SET_TODOS = 'SET_TODOS';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

export const updateTodo = (id, updatedTodo) => ({
  type: UPDATE_TODO,
  payload: { id, updatedTodo }
});
