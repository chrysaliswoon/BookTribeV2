import { Component, OnInit } from '@angular/core';
import { Shelf } from '../models/shelf';
import { Router } from '@angular/router';
import { ReviewService } from '../services/review.service';
import { AllReviews } from '../models/review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit{

  reviews!: AllReviews[];
  email: any = '';
  firstName: any = '';

  constructor(private router: Router, private reviewSvc: ReviewService) { }

  ngOnInit(): void {
    this.email = localStorage.getItem("email")
    this.firstName = localStorage.getItem("firstName")

    this.getReviewsByUser(this.email);
      
  }

  getReviewsByUser(email: string) {
    email = this.email
    this.reviewSvc.getReviewsByUser(email).subscribe(data => {
      console.log(data)
      this.reviews = data
    })
  }

  



}
