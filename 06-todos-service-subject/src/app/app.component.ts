import { Component, OnInit } from '@angular/core';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = '06-todos-service-subject';
  todos: { id: number, task: string, completed: boolean }[] = [];

  constructor(private todoService:TodosService) {}

  ngOnInit(): void {
      this.todoService.todos$.subscribe((todos)=>{
        this.todos=todos;
      })
  }

  addEventToList(task: string) {
    this.todoService.addToDo(task);
  }
}
