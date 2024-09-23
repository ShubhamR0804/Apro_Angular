import { Component, Input, Output, EventEmitter } from '@angular/core';
interface Todo {
  id: number;
  taskName: string;
  completed: boolean;
}

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
})
export class DisplayComponent {
  @Input() todos: Todo[] = [];
  @Input() completedTasks: Todo[] = [];
  @Output() markAsCompleted = new EventEmitter<Todo>();
  @Output() deleteTask = new EventEmitter<Todo>();

  completeTask(todo: Todo) {
    this.markAsCompleted.emit(todo);
  }


  deleteTaskFromList(todo: Todo) {
    this.deleteTask.emit(todo);
  }
  
}
