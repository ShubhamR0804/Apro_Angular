import { Component } from '@angular/core';
interface Todo {
  id: number;
  taskName: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '04-todos';
  todos: Todo[] = [];
  completedTasks: Todo[] = [];
  nextId: number = 1;

  addTask(taskName: string) {
    if (taskName.trim()) {
      this.todos.push({
        id: this.nextId++,
        taskName,
        completed: false,
      });
      console.log("Current Todo List: ",this.todos);
      
    }
  }

  markAsCompleted(todo: Todo) {
    todo.completed = true;
    this.completedTasks.push(todo);
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    console.log('Updated Todos List:', this.todos); 
  }

  deleteTask(todo: Todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    this.completedTasks = this.completedTasks.filter((t) => t.id !== todo.id);
    console.log('Todos after deletion:', this.todos);
  }
}
