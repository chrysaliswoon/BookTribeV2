import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tribe-page',
  templateUrl: './tribe-page.component.html',
  styleUrls: ['./tribe-page.component.scss']
})
export class TribePageComponent implements OnInit{

users!: User[];
constructor(private router: Router, private userSvc: UserService) { }

ngOnInit(): void {
    this.getUsers()
}

getUsers() {
    console.log("Data:")
    this.userSvc.getAllUsers().subscribe(data => {
        console.log(data)
        this.users = data
    })
}

}
