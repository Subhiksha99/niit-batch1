import { Injectable } from '@angular/core';
import User from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  id: number = 8;
  // Ctrl +d - edit multiple fields
  users: User[] = [
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "firstName": "George",
      "lastName": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "firstName": "Janet",
      "lastName": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
      "id": 3,
      "email": "emma.wong@reqres.in",
      "firstName": "Emma",
      "lastName": "Wong",
      "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
      "id": 4,
      "email": "eve.holt@reqres.in",
      "firstName": "Eve",
      "lastName": "Holt",
      "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
      "id": 5,
      "email": "charles.morris@reqres.in",
      "firstName": "Charles",
      "lastName": "Morris",
      "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
      "id": 6,
      "email": "tracey.ramos@reqres.in",
      "firstName": "Tracey",
      "lastName": "Ramos",
      "avatar": "https://reqres.in/img/faces/6-image.jpg"
    }
  ]

  getAllUsers() { return this.users; }
  getUserById(id: number) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id) {
        return this.users[i];
      }
    }
    return {};
  }
  addUser(user: User) {
    console.log("before adding id: ", user)
    user.id = this.id;
    this.id++;
    console.log("after adding id: ", user);
    this.users.push(user);
  };
  deleteUser(id: number) {
    // splice
    console.log("service", id)
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == id) {
        this.users.splice(i, 1);
      }
    }
    console.log(this.users);
    return this.users;
  }
  updateUser(user) {
    console.log(user)
    this.users = this.users.map(u => u.id == user.id ? user : u);

    console.log(this.users);
  }
  updateEmail(id: number, email: string) { }
  updateFirstName(id: number, firstName: string) { }

}
