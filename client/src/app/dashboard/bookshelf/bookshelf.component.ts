import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/models/book';
import { Shelf } from 'src/app/models/shelf';
import { BookService } from 'src/app/services/book.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  visible: boolean;
  firstName: any = '';
  email: any = '';
  shelf!: Shelf[];
  books: Book[]
  bookSubscription: Subscription;
  deleteSubscription: Subscription;

  constructor(private fb: FormBuilder, private router: Router,private shelfSvc: BookService, private reviewSvc: ReviewService) { }

  ngOnInit(): void {
    // this.bookId = this.route.snapshot.params['id']
    this.firstName = localStorage.getItem("firstName");
    this.email = localStorage.getItem("email");
    this.getBooks()
    this.form = this.createForm()

  }

  private createForm(): FormGroup {
    return this.fb.group({
      comments: this.fb.control<string>('', [Validators.required]),
    })
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

  // bookDetails(bookName: String) {
  //   this.bookSubscription = this.bookSvc.getBooks(bookName).subscribe(data => {
  //      this.books = data
  // });}

  deleteBook(id:string) {
    // console.log(this.email)
    this.deleteSubscription = this.shelfSvc.deleteBook(id, this.email).subscribe(data => {
      console.log(data);
    })
    this.router.navigate(['/dashboard'])

  }

  submitReview(id:string) {

    const comments = this.form.value

    this.reviewSvc.postReview(this.email, id, comments).subscribe(data => {
      console.log(data)
    })
  }

  showDialog() {
      this.visible = true;
  }



}
