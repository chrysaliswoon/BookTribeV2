import { Injectable } from "@angular/core";
import { environment } from "../environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Poem, Quote } from "../models/inspire";


const BACKEND = environment.serverUrl

@Injectable({ providedIn: 'root' })

export class InspirationService {
    // API URL
    private baseURL = BACKEND + "/api/"

    constructor(private http:HttpClient) {}

    getPoem(): Observable<Poem[]> {
        const url = this.baseURL + "poem"
        return this.http.get<Poem[]>(url);
    }

    getQuote(): Observable<Quote[]> {
        const url = this.baseURL + "quote"
        return this.http.get<Quote[]>(url);

    }

}