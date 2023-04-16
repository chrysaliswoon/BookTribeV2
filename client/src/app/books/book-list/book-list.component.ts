import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AppTopbarComponent } from 'src/app/layout/app.topbar.component';
import {  Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  books!: Book[];

  bookName: String = '';

  constructor(private router: Router, private bookSvc: BookService) { }


  ngOnInit(): void {
    console.log(this.books)

    this.books
  }

  getBooks(bookName: String) {
    this.bookSvc.getBooks(bookName).subscribe(data => {
       this.books = data
  });
  }

searchBooks() {
    this.getBooks(this.bookName)
    this.router.navigate(
        ['dashboard/search'],
        {queryParams: {book: this.bookName}}
    );
    
}


}
