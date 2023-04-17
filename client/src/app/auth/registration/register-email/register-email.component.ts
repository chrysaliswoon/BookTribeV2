import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-email',
  templateUrl: './register-email.component.html',
  styleUrls: ['./register-email.component.scss']
})
export class RegisterEmailComponent implements OnInit{

  registerForm!: FormGroup
  submitted = false;
  user!: User;

  constructor(private fb: FormBuilder, private userSvc: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.createForm()
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

    this.userSvc.createUser(this.user).subscribe(data => {
      console.log(data)
      this.user = data;
      localStorage.setItem("email", this.user.email)
      this.router.navigate(['/auth/verification'])
      
    })
  }

}
