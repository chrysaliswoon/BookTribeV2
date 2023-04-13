import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/inspire';
import { InspirationService } from 'src/app/services/inspiration.service';

@Component({
  selector: 'app-inspire-quote',
  templateUrl: './inspire-quote.component.html',
  styleUrls: ['./inspire-quote.component.scss']
})
export class InspireQuoteComponent implements OnInit{

  quote!: Quote[]
  imageUrl: String = "https://source.unsplash.com/random/?motivational,landscape"

  constructor(private inspireSvc: InspirationService) {}

  ngOnInit(): void {
      this.getQuote()
  }

  getQuote() {
    this.inspireSvc.getQuote().subscribe(data => {
      this.quote = data
    })
  }

  generateQuote() {
    this.getQuote()

  }

}
