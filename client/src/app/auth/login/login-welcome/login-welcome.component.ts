import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-welcome',
  templateUrl: './login-welcome.component.html',
  styleUrls: ['./login-welcome.component.scss']
})
export class LoginWelcomeComponent implements OnInit{
username: any = "";

constructor(public router: Router){}

ngOnInit(): void {

    this.username = localStorage.getItem("username");
}

}
