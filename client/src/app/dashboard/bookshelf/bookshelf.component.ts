import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Shelf } from 'src/app/models/shelf';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit, OnDestroy {


  username: any = '';
  email: any = '';
  shelf!: Shelf[];
  bookSubscription: Subscription;
  deleteSubscription: Subscription;

  constructor(private router: Router,private shelfSvc: BookService) { }

  ngOnInit(): void {
    // this.bookId = this.route.snapshot.params['id']
    this.username = localStorage.getItem("username");
    this.email = localStorage.getItem("email");
    this.getBooks()
  }

  ngOnDestroy(): void {
      // this.bookSubscription.unsubscribe()
      // this.deleteSubscription.unsubscribe()
  }

  getBooks() {
    this.bookSubscription = this.shelfSvc.getUserBooks(this.email).subscribe(data => {
      this.shelf = data
    })
  }

  deleteBook(id:string) {
    // console.log(this.email)
    this.deleteSubscription = this.shelfSvc.deleteBook(id, this.email).subscribe(data => {
      console.log(data);
    })
    this.router.navigate(['/dashboard'])

  }


}
