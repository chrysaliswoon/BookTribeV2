import { Component } from '@angular/core';

@Component({
  selector: 'app-tribe-page',
  templateUrl: './tribe-page.component.html',
  styleUrls: ['./tribe-page.component.scss']
})
export class TribePageComponent {

  users =  [
    {
        name: 'Tanya',
        image:'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg'
    },
    {
        name: 'John',
        image:'assets/demo/images/ecommerce/product-list/product-list-2-2.png'
    },
    {
        name: 'Chrysalis',
        image:'assets/demo/images/ecommerce/product-list/product-list-2-3.png'
    },
    {
        name: 'Fero',
        image:'assets/demo/images/ecommerce/product-list/product-list-2-4.png'
    },
];

}
