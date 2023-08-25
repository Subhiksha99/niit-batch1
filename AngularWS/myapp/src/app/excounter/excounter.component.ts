import { Component } from '@angular/core';

@Component({
  selector: 'app-excounter',
  templateUrl: './excounter.component.html',
  styleUrls: ['./excounter.component.css']
})
export class ExcounterComponent {
  title = "Counter App";
  counter = 0;
  stepValue = 2;
  onIncrement() {
    this.counter += this.stepValue;
  }

  onDecrement() {
    if (this.counter >= this.stepValue) {
      this.counter -= this.stepValue;
    }
  }
}
