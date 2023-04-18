import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { UserService } from '../services/user.service';
import { Image, User } from '../models/user';
import { DatePipe } from '@angular/common';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [DatePipe, ConfirmationService, MessageService]
})
export class ProfileComponent implements OnInit {

  updateProfile!: FormGroup;
  user!: User
  username: any = '';
  email: any = '';
  firstName: any = '';
  lastName: any = '';
  displayBasic: boolean = false;
  myDate = new Date();

  constructor(private router: Router, private fb: FormBuilder, private messageService: MessageService, private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig, private userSvc: UserService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getUserDetails()
    this.updateProfile = this.createForm()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      password: this.fb.control<string>('', [Validators.required]),
    })
  }

  getUserDetails() {
    this.email = localStorage.getItem("email");
    this.username = localStorage.getItem("username");
    this.firstName = localStorage.getItem("firstName");
    this.lastName = localStorage.getItem("lastName");

  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  onUpload(event: any) {
    for (let file of event.files) {
      this.user.images.push(file);
    }
  }

  onSubmit() {
    console.log(this.email)
    this.userSvc.deleteUser(this.email).subscribe(data => {
      console.log(data);
    })
    this.router.navigate(['/'])


  }




}
