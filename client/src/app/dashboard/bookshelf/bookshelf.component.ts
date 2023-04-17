import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit{

  username: any = '';

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
  }

  books =  [
    {
        color: 'Bluegray',
        image:'assets/demo/images/ecommerce/product-list/product-list-2-1.png'
    },
    {
        color: 'Indigo',
        image:'assets/demo/images/ecommerce/product-list/product-list-2-2.png'
    },
    {
        color: 'Purple',
        image:'assets/demo/images/ecommerce/product-list/product-list-2-3.png'
    },
    {
        color: 'Cyan',
        image:'assets/demo/images/ecommerce/product-list/product-list-2-4.png'
    },
];

}
