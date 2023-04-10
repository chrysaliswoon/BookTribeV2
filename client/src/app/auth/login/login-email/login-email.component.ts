import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.scss']
})
export class LoginEmailComponent implements OnInit{

  loginForm!: FormGroup
  user!: User

  constructor(private fb: FormBuilder,  private userSvc:UserService , private router: Router){}

  ngOnInit(): void {
      this.loginForm = this.createForm()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      email: this.fb.control<string>('', [Validators.required, Validators.email]),
      password: this.fb.control<string>('', [Validators.required]),
    })
  }

  processLoginForm() {
    if (this.loginForm.invalid) {
      return;
    }

    this.user = this.loginForm.value;
    this.userSvc.authUser(this.user)

    .then(results => {
      this.user = results
      localStorage.setItem("email", this.user.email)
      this.router.navigate(['/welcome'])
    })

    .catch(err => {
      console.info('>>> error: ', err)
    })
  }


}
