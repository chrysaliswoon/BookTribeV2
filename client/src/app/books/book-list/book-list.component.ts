import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppTopbarComponent } from 'src/app/layout/app.topbar.component';
import {  Book } from 'src/app/models/book';
import { Shelf } from 'src/app/models/shelf';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  books!: Book[];
  bookName: string = '';
  shelf!: Shelf
  bookSubscription: Subscription

  constructor(private router: Router, private bookSvc: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookName = this.route.snapshot.params['id'];
    this.getBooks(this.bookName);
  }

  
  getBooks(bookName: string) {
    this.bookSubscription = this.bookSvc.getBooks(this.bookName).subscribe(data => {
      this.books = data
    });}
    
    
    addBook(id: string, title: string, url: string) {
      
      const email = localStorage.getItem("email");
      
      this.bookSvc.saveBooks(email, id, title, url).subscribe(data => {
        this.router.navigate(['dashboard']);  
      })
    }
    
    bookDetails(id: string) {
      this.router.navigate(['dashboard/book', id]);  
      
    }
    
  }
  
  // ngOnChanges(changes: SimpleChanges): void {
  //   const paramId = this.route.snapshot.params['id']
  //   changes[paramId];
  //   this.getBooks(this.bookName);

  // }

  // ngOnDestroy(): void {
  //     this.bookSubscription.unsubscribe()
  // }