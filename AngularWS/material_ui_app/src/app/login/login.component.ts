import { Component, KeyValueDiffers } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

// FormBuilder - is a service , reduces boiler plate code used in FormGroup & FormControl
interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  roles: Role[] = [
    { value: 'customer', viewValue: 'Customer' },
    { value: 'admin', viewValue: 'Admin' },
    { value: 'manager', viewValue: 'Manager' },
  ];


  // DI- Inject form builder into LoginComponent
  constructor(private fb: FormBuilder) { }

  public loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.%#^]{3,10}')]],
    role: ['', Validators.required]
  })

  onSubmit() {
    console.log("onSubmit");
    console.log(this.loginForm.value);
  }
}
