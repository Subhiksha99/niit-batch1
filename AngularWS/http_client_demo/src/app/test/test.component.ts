import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements AfterViewInit {
  private _firstName: string;

  email: string;
  password: string;

  @ViewChild('emailRef') emailElementRef: ElementRef;

  ngAfterViewInit(): void {
    this.emailElementRef.nativeElement.focus();
  }
  set firstName(name: string) {
    this._firstName = name;
  }

  get firstName() {
    return this._firstName;
  }


}
