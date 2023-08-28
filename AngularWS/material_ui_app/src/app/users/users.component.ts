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

  //users: any = [];

  dataSource: any = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'avatar', 'actions'];

  // Get all Users - getAllUsers()

  // life cycle hook methods
  // ngOnInit

  ngOnInit() {
    console.log('ngOnInit');
    this.dataSource = this.userService.getAllUsers();
    console.log(this.dataSource);
  }

  onDelete(id: number) {
    console.log(id);
    this.dataSource = this.userService.deleteUser(id);
    console.log('userComp', this.dataSource);
  }
}
