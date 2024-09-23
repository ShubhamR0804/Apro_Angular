import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '05-todos-new';
  nextId: number = 0; 
  todos: { id: number, task: string, completed: boolean }[] = [];

  // Method to add a new task to the todos array
  addEventToList(input: string) {
    
    const newTodo = {
      id: ++this.nextId,
      task: input,
      completed: false
    };

    // Create a new array reference with the new todo added
    this.todos = [...this.todos, newTodo];
  }

  // Handle the task completion toggle
  markComplete(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
    this.todos = [...this.todos];  // Update reference to trigger change detection
  }

  
  // Handle task deletion
  handleDelete(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
