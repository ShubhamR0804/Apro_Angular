import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //title = 'my-app';
  name: number = 10;

  // getUserName() : string{

  //   return this.name;
  // }

  user: any = {
    name: 'shubham',
    email: 'shubham@123',
  };
  link: string = 'http://www.google.com';
  imageUrl: string =
    'https://onlinepngtools.com/images/examples-onlinepngtools/giraffe-illustration.png';
  imageWidth = 200;
  imageHeight = 200;
  disabled = true;

  showAlert() {
    alert('Alert Buton Clicked.........');
  }
  num: number = 0;
  value: string = '';
  add(box: HTMLInputElement) {
    if (this.num < 15) {
      this.num = +box.value + 1;
    } else{
      alert("Max number reached");
    }
  }
  subtract(box: HTMLInputElement) {
    if(this.num>0){
    this.num = +box.value - 1;
    }
    else{
      alert("Min number reached");
    }
  }

  reset() {
    this.num = 0;
     // addText(box:HTMLInputElement){
    // // // this.value=box.value;
    // // // }

    // onAddText(box1:HTMLInputElement){
    // this.value=box1.value;
    // }
  }

  @ViewChild("box2",{static:true})
  inputElement!:ElementRef;
  addNewText(){
this.value=this.inputElement.nativeElement.value;
  }
}
