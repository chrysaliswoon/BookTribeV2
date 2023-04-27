import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllReviews, Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-book-reviews',
  templateUrl: './book-reviews.component.html',
  styleUrls: ['./book-reviews.component.scss']
})
export class BookReviewsComponent implements OnInit{

  reviews!: AllReviews[]
  bookId: string = '';

  constructor(private reviewSvc: ReviewService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['id'];
    this.getReviews(this.bookId)
  }

  getReviews(bookId: string) {
    this.reviewSvc.getReviewsById(bookId).subscribe((response) => {
      this.reviews = response
      console.log(response)
    })
  }

  viewProfile(email: string) {
    this.router.navigate(['dashboard/user/', email])
  }

  bookDetail() {
    this.router.navigate(['dashboard/book/', this.bookId])

  }


}
