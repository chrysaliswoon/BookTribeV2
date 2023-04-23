import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Shelf } from 'src/app/models/shelf';
import { User } from 'src/app/models/user';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.scss']
})
export class MemberProfileComponent implements OnInit{

  id: string
  user!: User
  myDate = new Date();
  shelf!: Shelf[];
  bookSubscription: Subscription;
  email: any = '';

  
  constructor(private shelfSvc: BookService, private userSvc: UserService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUser(this.id);
    this.getBooks()
    this.email = localStorage.getItem("email");

  }

  getBooks() {
    this.bookSubscription = this.shelfSvc.getUserBooks(this.email).subscribe(data => {
      this.shelf = data
    })
  }

  getUser(id: string) {
    this.userSvc.getUser(id).subscribe(data => {
      this.user = data;
      console.log(data)
    })
  }

}
