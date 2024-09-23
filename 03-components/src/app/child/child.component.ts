import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

//   @Input() childInputMessage:string="";
//   @Input() studentsList:any = "";

@Output() childOutput = new EventEmitter<string>();
onSendData(){
  this.childOutput.emit("Message from Child")
}
}
