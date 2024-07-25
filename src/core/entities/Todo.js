/* 
To mention properties of the TODO 
1. ID
2. Title
3. completed(status)
*/

export class Todo {
    constructor(id, title, completed = false) {
      this.id = id;
      this.title = title;
      this.completed = completed;
    }
  }
  
  