import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <weather 
  city="Pune"
  [low]="25"
  [high]="65"
  condition="rain"
  >
  </weather>
  `
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
}
