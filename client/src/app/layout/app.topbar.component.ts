import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopbarComponent{

    books!: Book[];

    bookName: String = '';

    @ViewChild('menubutton') menuButton!: ElementRef;

    constructor(public layoutService: LayoutService, private router: Router, private bookSvc: BookService) { }
    
    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    onProfileButtonClick() {
        this.layoutService.showProfileSidebar();
    }

    // getBooks(bookName: String) {
    //     this.bookSvc.getBooks(bookName).subscribe(data => {
    //        this.books = data
    //   });
    //   }

    // searchBooks() {
    //     this.getBooks(this.bookName)
    //     this.router.navigate(
    //         ['dashboard/search'],
    //         {queryParams: {book: this.bookName}}
    //     );
        
    // }
    
}