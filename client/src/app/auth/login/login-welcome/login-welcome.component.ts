import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-welcome',
  templateUrl: './login-welcome.component.html',
  styleUrls: ['./login-welcome.component.scss']
})
export class LoginWelcomeComponent {
username: string = "Chrysalis";

constructor(public router: Router){}

}
