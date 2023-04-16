import { Injectable } from "@angular/core";
import { environment } from "../environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "../models/book";

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

}

