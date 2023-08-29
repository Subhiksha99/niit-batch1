import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router";

// Activated Route -read id from url
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  // used to store user data got from service by calling getUserById() method
  user: any = {};


  // used to read form data
  userForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    avatar: new FormControl('')
  });

  onSubmit() {
    // logic to call service method to update user info
    console.log(this.userForm.value);
    console.log(typeof (this.userForm.value));
    this.userService.updateUser(this.userForm.value);
    // Navigate user to /users
    this.router.navigate(['/users']);
  }
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.user = this.userService.getUserById(parseInt(id));
    console.log(this.user);

    // Update user details
    this.userForm.setValue({
      id: this.user.id,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      avatar: this.user.avatar
    });
  }


}
