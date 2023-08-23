import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <div>
        <p>Hello World</p>
        <p>{{title}}</p>
        <p>{{2+5}}</p>
        Title length: <p>{{title.length}}</p>
        <h1>{{greet()}}</h1>
        <!-- {{a=10}} -->
        <!-- {{window.document.URL}} -->
        <input type='text' id='input1' placeholder="Enter first name"/>
        <input type='text' [id]='testId' placeholder="Enter last name"/>
</div>`,
  styles: [`
    p {
      color: red;
      font-weight:bold;
    }
  `]
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
