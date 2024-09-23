import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Output() taskOutputEvent = new EventEmitter<string>();
  
  inputVal:string="";

  onSubmitTask() {
    this.taskOutputEvent.emit(this.inputVal);
    this.inputVal="";
  }


}
