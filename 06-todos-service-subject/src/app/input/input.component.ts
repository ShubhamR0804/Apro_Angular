import { Component } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  constructor(private todoService: TodosService) {}

  onSubmitTask(inputTask: HTMLInputElement) {
    const task = inputTask.value.trim();
    if(task){
      this.todoService.addToDo(task);
    }
    inputTask.value = '';
  }
}
