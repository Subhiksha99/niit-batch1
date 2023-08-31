import { Component, Input, Output, EventEmitter } from '@angular/core';
import Customer from '../customer';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() customers: Customer[];

  isLoggedIn: boolean

  @Output() greetEvent = new EventEmitter();

  name: string = "Raj";

  callParentGreet() {
    // listening for click event and sending out custom event whenever
    // user clicks on greet button.after this,
    // parent will execute method defined in parent

    // without emitting greetEvent with data
    //this.greetEvent.emit();

    // emitting greetEvent with data
    this.greetEvent.emit(this.name);
  }

}
