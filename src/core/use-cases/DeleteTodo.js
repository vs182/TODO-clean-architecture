import { TodoRepository } from "../repositories/TodoRepository";

export class DeleteTodo {
  constructor(todoRepository = new TodoRepository()) {
    this.todoRepository = todoRepository;
  }

  execute(id) {
    return this.todoRepository.delete(id);
  }
}
