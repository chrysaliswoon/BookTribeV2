import { Injectable } from "@angular/core";
import { environment } from "../environment";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "../models/book";
import { Shelf } from "../models/shelf";

const BACKEND = environment.serverUrl


@Injectable({ providedIn: 'root' })

export class BookService {
    private baseURL = BACKEND + "/api/"
    constructor(private http:HttpClient) {}

    getBooks(value: any): Observable<Book[]> {
        const params = new HttpParams().set('book', value)
        const url = this.baseURL + "search"
        return this.http.get<Book[]>(url, {params: params}); 
    }

    getBookById(id: string): Observable<Book[]> {
        const url = this.baseURL + "search/" + id
        return this.http.get<Book[]>(url); 
    }

    getUserBooks(email: string): Observable<Shelf[]> {
        const url = this.baseURL + "shelf/" + email
        return this.http.get<Shelf[]>(url);
    }

    deleteBook(bookId: string, email: string): Observable<Shelf> {
        const url = this.baseURL + "delete/" + bookId + "/" + email
        return this.http.delete<Shelf>(url);
    }

    saveBooks(email: string, bookId: string, title: string, imgUrl: string):Observable<Shelf> {
        const url = this.baseURL + "addBook" 
        const qs = new HttpParams()
        .set("email", email)
        .set("bookId", bookId)
        .set("title", title)
        .set("imageUrl", imgUrl)

        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')        
        return this.http.post<Shelf>(url, qs.toString(), {headers});

    }

}

