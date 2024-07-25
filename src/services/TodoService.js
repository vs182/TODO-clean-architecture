import { AddTodo } from '../core/use-cases/AddTodo';
import { DeleteTodo } from '../core/use-cases/DeleteTodo';
import { UpdateTodo } from '../core/use-cases/UpdateTodo';

export class TodoService {
  constructor() {
    this.addTodo = new AddTodo();
    this.deleteTodo = new DeleteTodo();
    this.updateTodo = new UpdateTodo();
  }

  add(todo) {
    return this.addTodo.execute(todo);
  }

  delete(id) {
    return this.deleteTodo.execute(id);
  }

  update(id, updatedTodo) {
    return this.updateTodo.execute(id, updatedTodo);
  }
}
