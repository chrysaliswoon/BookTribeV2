import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { DatePipe } from '@angular/common';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUpload } from '../models/file';
import { Shelf } from '../models/shelf';
import { Subscription } from 'rxjs';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [DatePipe, ConfirmationService, MessageService]
})
export class ProfileComponent implements OnInit {


  file!: File
  
  shelf!: Shelf[];
  form!: FormGroup;
  user!: User
  username: any = '';
  email: any = '';
  firstName: any = '';
  lastName: any = '';
  profileImg: any = '';
  displayBasic: boolean = false;
  myDate = new Date();
  imageData = "";
  bookSubscription: Subscription;


  constructor(private shelfSvc: BookService, private router: Router, private fb: FormBuilder, private messageService: MessageService, private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig, private userSvc: UserService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getUserDetails()
    this.form = this.createForm()
    this.getBooks()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      firstName: this.fb.control<string>('', [Validators.required]),
      lastName: this.fb.control<string>('', [Validators.required]),
      password: this.fb.control<string>('', [Validators.required]),
      profileImg: this.fb.control(Validators.required),
    })
  }

  getUserDetails() {
    this.email = localStorage.getItem("email");
    this.username = localStorage.getItem("username");
    this.firstName = localStorage.getItem("firstName");
    this.lastName = localStorage.getItem("lastName");
    this.profileImg = localStorage.getItem("profileImg");

  }

  getBooks() {
    this.bookSubscription = this.shelfSvc.getUserBooks(this.email).subscribe(data => {
      this.shelf = data
    })
  }

  showBasicDialog() {
    this.displayBasic = true;
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    console.info('file', this.file)

    this.form.patchValue({
      profileImg: this.file
    })
  }

  onUpload() {
    const formData: FileUpload = this.form.value
    formData.email = localStorage.getItem('email')
    //console.info('file', formData.fileUpload)
    //console.info(formData)

    this.userSvc.updateUser(formData)

    .then(results => {
    })
    this.router.navigate(['/login'])


  }

  onSubmit() {
    // console.log(this.email)
    this.userSvc.deleteUser(this.email).subscribe(data => {
      console.log(data);
    })
    this.router.navigate(['/'])

  }

  confirm(event: Event) {
    this.confirmationService.confirm({
        target: event.target,
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Account has been deleted!' });
            this.onSubmit()
        },
        reject: () => {
            this.messageService.add({ severity: 'info', summary: 'Declined', detail: 'We`re glad you`ve decided to stay with us!' });
        }
    });
}




}
