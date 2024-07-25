import { TodoRepository } from "../repositories/TodoRepository";

export class UpdateTodo {
  constructor(todoRepository = new TodoRepository()) {
    this.todoRepository = todoRepository;
  }

  execute(id, updatedTodo) {
    return this.todoRepository.update(id, updatedTodo);
  }
}
