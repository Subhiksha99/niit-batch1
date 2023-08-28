import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  // DI - Dependency Injection
  constructor(private userService: UserService) {
    console.log('constructor');
  }

  users: any = [];

  // Get all Users - getAllUsers()

  // life cycle hook methods
  // ngOnInit

  ngOnInit() {
    console.log('ngOnInit');
    this.users = this.userService.getAllUsers();
    console.log(this.users);
  }
}
