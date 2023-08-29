import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import User from "../user";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  // DI - Injected UserService 
  constructor(
    private userService: UserService,
    private router: Router) { }



  onAddUser(user: User) {

    console.log(user);
    this.userService.addUser(user);
    this.router.navigate(['/users']);
  }
}
