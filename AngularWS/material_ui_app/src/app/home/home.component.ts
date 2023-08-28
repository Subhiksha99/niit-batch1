import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // DI
  constructor(private userService: UserService) { }

  users: any = [];

  // call getAllUsers() method to get all users defined in UserService

  ngOnInit() {
    this.users = this.userService.getAllUsers();
    console.log(this.users)
      ;
  }

}
