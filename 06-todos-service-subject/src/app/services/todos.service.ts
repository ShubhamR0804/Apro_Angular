import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todos: Todo[] = [];
  private nextId = 1;

  private todosSubject = new BehaviorSubject<Todo[]>(this.todos);

  todos$ = this.todosSubject.asObservable();

  addToDo(task: string) {
    const newTodo: Todo = { id: this.nextId++, task, completed: false };
    this.todos = [...this.todos, newTodo];
    this.todosSubject.next(this.todos);
  }

  markComplete(id: number) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.todosSubject.next(this.todos);
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.todosSubject.next(this.todos);
  }
}
