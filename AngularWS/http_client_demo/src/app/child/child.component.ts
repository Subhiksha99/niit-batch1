import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input('isLoggedIn') loginFlag: boolean;

  name: string = "Raj"
  @Output() greetEvent = new EventEmitter();
  callParentGreet() {
    // listening for click event and sending out custom event whenever user clicks on greet button. after this, parent will execute method defined in parent
    this.greetEvent.emit(this.name);
  }

}
