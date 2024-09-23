import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Output() add = new EventEmitter<string>();

  addTask(taskName: string) {
    if (taskName.trim()) {
      this.add.emit(taskName);
    }
  }
}
