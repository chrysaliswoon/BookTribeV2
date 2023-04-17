import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  title = '';
  subtitle = '';

  confirmed: boolean = false;
  registerOptions: boolean = true;
  email: boolean = false;

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.registerOptions = true;
    this.title = "Create a New Account";
    this.subtitle = "Join us in a few simple clicks";
  }

  get dark(): boolean {
    return this.layoutService.config.colorScheme !== 'light';
  }

  registerByEmail() {
    this.registerOptions = false;
    this.email = true;
    this.title = "Continue with email";
  }

}
