import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  customers = [
    { id: 101, 'name': 'Raj' },
    { id: 102, name: 'Sam' },
    { id: 103, name: 'Krish' }
  ]

  // greet() {
  //   alert("Hello World!");
  // }

  greet(name: string) {
    alert("Hello " + name);
  }

}
