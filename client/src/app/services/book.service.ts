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

    getUserBooks(email: String): Observable<Shelf[]> {
        const url = this.baseURL + "shelf/" + email
        return this.http.get<Shelf[]>(url);
    }

    deleteBook(bookId: String, email: String): Observable<Shelf> {
        const url = this.baseURL + "delete/" + bookId + "/" + email
        console.log(url)

        return this.http.delete<Shelf>(url);
      }

}

