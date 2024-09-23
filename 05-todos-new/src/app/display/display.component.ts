import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnChanges {
  // Receive the entire todos array
  @Input() todos: { id: number, task: string, completed: boolean }[] = [];

  @Output() displayEmitter = new EventEmitter<number>();
  @Output() deleteTodoEvent = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['todos']) {
      console.log('Todos array changed:',changes['todos'].currentValue);
    }
  }

  markComplete(id: number) {
    this.displayEmitter.emit(id);
  }

  deleteTodo(id: number) {
    this.deleteTodoEvent.emit(id);
  }
}
