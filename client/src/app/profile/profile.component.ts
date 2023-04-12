import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [DatePipe]
})
export class ProfileComponent {

  user!: User
  username: any = '';
  email: any = '';
  firstName: any = '';
  lastName: any = '';

  myDate = new Date();

  constructor(private userSvc: UserService){}

  getUserDetails(){
    this.email = localStorage.getItem("email");
    this.username = localStorage.getItem("username");
    this.firstName = localStorage.getItem("firstName");
    this.lastName = localStorage.getItem("lastName");

  }

}
