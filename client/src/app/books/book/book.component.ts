import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Shelf } from 'src/app/models/shelf';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  description: string
  id: string
  books!: Book[];


  constructor(private router: Router, private bookSvc: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.getBook(this.id);
    
  }

  getBook(id: string) {
    this.bookSvc.getBookById(id).subscribe(data => {
      // console.log(data)
      this.books = data;
    })
  }

  addBook(id: string, title: string, url: string) {

    console.log(id)
    console.log(title)
    console.log(url)


    const email = localStorage.getItem("email");
  
    this.bookSvc.saveBooks(email, id, title, url).subscribe(data => {
      this.router.navigate(['dashboard']);  
    })
  }

  searchBook() {
    this.router.navigate(['dashboard/search']);  

  }



}
