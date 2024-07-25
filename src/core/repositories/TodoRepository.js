/* Managing all core functionalities */

export class TodoRepository {
    constructor() {
      this.todos = [];
    }
  
    add(todo) {
      this.todos.push(todo);
      return this.todos;
    }
  
    getAll() {
      return this.todos;
    }
  
    update(id, updatedTodo) {
      this.todos = this.todos.map(todo => 
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      );
      return this.todos;
    }
  
    delete(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      return this.todos;
    }
  }
  