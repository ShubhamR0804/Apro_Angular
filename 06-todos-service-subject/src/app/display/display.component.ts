import { Component, Input } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

  @Input() todos: { id: number, task: string, completed: boolean }[] = [];

  constructor(private todoService: TodosService) {}

  markComplete(id: number) {
    this.todoService.markComplete(id);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

}
