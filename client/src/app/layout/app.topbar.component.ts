import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrls: ['./app.topbar.component.scss']
})
export class AppTopbarComponent implements OnInit{

    books!: Book[];
    bookName: string = '';
    profileImg: string
    

    @ViewChild('menubutton') menuButton!: ElementRef;

    constructor(public layoutService: LayoutService, private router: Router, private bookSvc: BookService) { }

    ngOnInit(): void {
        this.profileImg = localStorage.getItem("profileImg")
    }
    
    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    onProfileButtonClick() {
        this.layoutService.showProfileSidebar();
    }

    getBooks(bookName: string) {
        this.bookSvc.getBooks(bookName).subscribe(data => {
           this.books = data
      });}

      searchBooks(id: string) {
        this.router.navigate(['dashboard/search', id]);  
        this.bookName = '';
        console.log(id)
      }
      
    
}