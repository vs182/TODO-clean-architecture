import { TodoRepository } from "../repositories/TodoRepository";

export class AddTodo {
  constructor(todoRepository = new TodoRepository()) {
    this.todoRepository = todoRepository;
  }

  execute(todo) {
    return this.todoRepository.add(todo);
  }
}
