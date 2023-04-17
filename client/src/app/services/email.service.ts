import { Injectable } from "@angular/core"
import { environment } from "../environment"
import { HttpClient } from "@angular/common/http"

const BACKEND = environment.serverUrl

@Injectable({ providedIn: 'root' })

export class UserService {

    // API Url - POST to Users
    private baseUrl = BACKEND + "/api/auth/"

    // Inject the HttpClient
    constructor(private http: HttpClient) {}

    //? GET Methods



}