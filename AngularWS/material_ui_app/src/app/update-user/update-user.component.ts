import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

// Activated Route -read id from url
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  user: any = {};

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.user = this.userService.getUserById(parseInt(id));
    console.log(this.user);
  }


}
