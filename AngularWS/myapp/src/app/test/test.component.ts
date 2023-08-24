import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  para = "p1";


  // AttributeBinding
  colspan = 2; // Can't bind to 'colspan' since it isn't a known property

  // StyleBinding
  para2 = 'orange';

  // Class Binding
  para3 = "p3"

  // Two way binding
  email = "user@example.com";

  // ngStyle
  flag = true;

  // ngIf - structural directives
  isLogin = true;

  // ngFor 
  countries = ['India', 'China', 'Japan', 'Russia'];

  // ngSwitch
  day = new Date().getDay();// 1-7 - 1 monday, 7-sunday
  //day = 7;

  // Event binding
  counter = 0;
  onClick() {
    console.log("clicked");
  }

  onIncrement() {
    this.counter++;
  }

  onDecrement() {
    if (this.counter > 0) {
      this.counter -= 1;
    }
  }

}

