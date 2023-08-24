import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
  name = 'Raj';

  testId = 'input2';
  // Interpolation - {{title}}

  // PropertyBinding - []

  greet() {
    return `Hello ${this.name}`
  }
}
