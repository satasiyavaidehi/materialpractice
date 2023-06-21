import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'materialpractice';
  menu = [
    {
      displayName: 'Home',
      iconName: '',
      route: '',
    },
    {
      displayName: 'About',
      iconName: '',
      route: 'about',
    },
    {
      displayName: 'Contact',
      iconName: '',
      route: 'contact',
    }
  ];
  name = "hello world";
  // getValue(event: Event): string {
  //   return (event.target as HTMLInputElement).value;
  }   

