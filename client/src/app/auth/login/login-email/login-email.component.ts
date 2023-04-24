import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { Subscription, delay } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.scss'],
  providers: [MessageService],

})
export class LoginEmailComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup;
  user!: User;
  subcription: Subscription;
  errorMessage: any = '';
  messages: Message[];
  loggedIn: Boolean = false;


  constructor(private fb: FormBuilder, private userSvc: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.createForm()
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      email: this.fb.control<string>('', [Validators.required, Validators.email]),
      password: this.fb.control<string>('', [Validators.required]),
    })
  }

  loginToAccount() {
    try {
      this.userSvc.verifyUser(this.user).subscribe(data => {
        this.user = data;
        this.loggedIn = true;
      },)
    } catch (error) {
      this.loggedIn = false;
    }
  }

  getUserDetails() {
    // console.log(this.loggedIn)
    this.user = this.loginForm.value;
    this.loginToAccount()
    if (this.loggedIn == false) {
      this.messages = [{ severity: 'error', summary: 'Error', detail: 'Incorrect User Credentials!' }];
    } else {
      this.messages = [{ severity: 'success', summary: 'Success', detail: 'Successfully logged in!' }];
        this.subcription = this.userSvc.getUser(this.user.email).subscribe((response) => {
          this.user = response;
          localStorage.setItem("username", this.user.username);
          localStorage.setItem("firstName", this.user.firstName);
          localStorage.setItem("lastName", this.user.lastName);
          localStorage.setItem("email", this.user.email);
          localStorage.setItem("profileImg", this.user.profileImg);          
          this.goToWelcomePage()
        }); 
    }
    
    
  }

  goToWelcomePage() {
    this.router.navigate(['/welcome'])
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.getUserDetails()

  }


}
