import { Component } from '@angular/core';


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

  onLogin() {
    //console.log(login);
  }
}
