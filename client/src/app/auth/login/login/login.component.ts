import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup
  title = '';

  confirmed: boolean = false;
  registerOptions: boolean = true;
  email:boolean = false;

	constructor(private fb: FormBuilder, private router: Router, private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.registerOptions = true;
    this.title = "Log in to BookTribe";
    this.loginForm = this.createForm()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      email: this.fb.control<string>('', [Validators.required, Validators.email]),
      password: this.fb.control<string>('', [Validators.required]),
    })
  }

	get dark(): boolean {
		return this.layoutService.config.colorScheme !== 'light';
	}


  loginByEmail() {
    
    this.registerOptions = false;
    this.email = true;
    this.title = "Continue with email";

  }

}
