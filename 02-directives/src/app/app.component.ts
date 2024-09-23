import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '02-directives';
  display: boolean = false;

  students: String[] = ['Ram', 'Shaam', 'Lucky', 'Anthony'];

  players: any[] = [
    {
      name: 'Sachin',
      age: 48,
      country: 'India',
      runs: 15000,
      wickets: 58,
    },
    {
      name: 'Virat',
      age: 38,
      country: 'India',
      runs: 20000,
      wickets: 78,
    },
    {
      name: 'Dhoni',
      age: 57,
      country: 'India',
      runs: 18000,
      wickets: 98,
    },
    {
      name: 'Butler',
      age: 43,
      country: 'England',
      runs: 15000,
      wickets: 48,
    },
    {
      name: 'Ponting',
      age: 40,
      country: 'Australia',
      runs: 17000,
      wickets: 58,
    },
  ];
  isDivVisible: boolean = true;

  toggleDivVisibility() {
    this.isDivVisible = !this.isDivVisible;
  }

  success: boolean = false;

  textColor = 'white';
  bgColor = 'blue';

  color: string = 'red';
}
