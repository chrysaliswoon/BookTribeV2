import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-email',
  templateUrl: './register-email.component.html',
  styleUrls: ['./register-email.component.scss'],
  providers: [MessageService],

})
export class RegisterEmailComponent implements OnInit, OnDestroy{

  registerForm!: FormGroup
  submitted = false;
  user!: User;
  subcription: Subscription;
  messages: Message[];
  userExists: Boolean = false;


  
  constructor(private fb: FormBuilder, private userSvc: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.createForm()
  }

  ngOnDestroy(): void {
      this.subcription.unsubscribe()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      username: this.fb.control<string>('', [Validators.required]),
      firstName: this.fb.control<string>('', [Validators.required]),
      lastName: this.fb.control<string>('', [Validators.required]),
      email: this.fb.control<string>('', [Validators.required, Validators.email]),
      password: this.fb.control<string>('', [Validators.required]),
    })
  }

  processRegisterForm() {
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.submitted = true
    this.user = this.registerForm.value;
    
    try {
      this.subcription = this.userSvc.createUser(this.user).subscribe((response) => {
        if (this.userExists == false) {
          this.user = response;
          localStorage.setItem("email", this.user.email)
          this.router.navigate(['/auth/verification'])
        } else {
          this.userExists = true;
          this.messages = [{ severity: 'error', summary: 'Error', detail: 'User already exists! Please log in.' }];
        }
      },)
    } catch (error) {
      console.log(error)
    }

    
  }

}
