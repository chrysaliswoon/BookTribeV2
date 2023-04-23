import { Injectable } from "@angular/core";
import { environment } from "../environment";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { AllReviews, Review } from "../models/review";

const BACKEND = environment.serverUrl

@Injectable({ providedIn: 'root' })

export class ReviewService {
    
    private baseURL = BACKEND + "/api/"
    constructor(private http:HttpClient) {}

    postReview(email: string, bookId: string, comments: string): Observable<Review> {
        const url = this.baseURL + "addReview" 

        const qs = new HttpParams()
        .set("email", email)
        .set("bookId", bookId)
        .set("comments", comments)

        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')        
        return this.http.post<Review>(url, qs.toString(), {headers});

    }

    getReviewsByUser(email: string): Observable<AllReviews[]> {
        const url = this.baseURL + "reviews/" + email
        return this.http.get<AllReviews[]>(url);
    }



}