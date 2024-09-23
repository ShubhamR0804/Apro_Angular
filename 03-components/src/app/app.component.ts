import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '03-components';
  message:string="Hello";
  students:any=[
    {
      name:"Shubham",
      age:22,
      dept:"Computer"
    },
    {
      name:"Kunal",
      age:23,
      dept:"Computer"
    },
    {
      name:"Shivam",
      age:22,
      dept:"Computer"
    },
    {
      name:"Atharva",
      age:22,
      dept:"MTRX"
    }

  ];
  onDataLoadFromChild(data:string){
    console.log(data);
    
  }
}
