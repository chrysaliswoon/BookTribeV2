import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.scss']
})
export class LoginEmailComponent implements OnInit, OnDestroy{

  loginForm!: FormGroup;
  user!: User; 
  subcription: Subscription;
  

  constructor(private fb: FormBuilder,  private userSvc:UserService , private router: Router){}

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
    this.userSvc.verifyUser(this.user).subscribe(data => {
      this.user = data;
    })
  }

  getUserDetails() {
    this.user = this.loginForm.value;
    this.loginToAccount()
    this.subcription = this.userSvc.getUser(this.user.email).subscribe(data =>{
      this.user = data;
      localStorage.setItem("username", this.user.username);
      localStorage.setItem("firstName", this.user.firstName);
      localStorage.setItem("lastName", this.user.lastName);
      localStorage.setItem("email", this.user.email);
      localStorage.setItem("profileImg", this.user.profileImg);
      console.log(data)

      this.goToWelcomePage()
      });
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
