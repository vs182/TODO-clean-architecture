export class ApiService {
    static fetchTodos() {
      // simulate an API call
      return Promise.resolve([
        { id: 1, title: "Learn React", completed: false },
        { id: 2, title: "Learn Clean Architecture", completed: false }
      ]);
    }
  }
