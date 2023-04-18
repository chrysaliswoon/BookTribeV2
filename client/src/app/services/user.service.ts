import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environment";
import { User } from "../models/user";
import { Observable } from "rxjs";


const BACKEND = environment.serverUrl

@Injectable({ providedIn: 'root' })

export class UserService {

    // API Url - POST to Users
    private baseUrl = BACKEND + "/api/auth/"

    // Inject the HttpClient
    constructor(private http: HttpClient) {}

    //? GET Methods

    getUser(email: String): Observable<User> {
      const url = this.baseUrl + email
      return this.http.get<User>(url);
    }

    getAllUsers(): Observable<User[]> {
      const url = this.baseUrl + "users"
      return this.http.get<User[]>(url);
    }

    //? POST Method
    createUser(user: User): Observable<User> {
      const url = this.baseUrl + "signup"
      const qs = new HttpParams()
      .set("username", user.username)
      .set("firstName", user.firstName)
      .set("lastName", user.lastName)
      .set("email", user.email)
      .set("password", user.password)
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')

      return this.http.post<User>(url, qs.toString(), {headers});
    }

    verifyUser(user: User): Observable<User> {
      const url = this.baseUrl + "signin"
      const qs = new HttpParams()
      
      .set("email", user.email)
      .set("password", user.password)
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')

      return this.http.post<User>(url, qs.toString(), {headers});

    }

    deleteUser(email: String): Observable<User> {
      const url = this.baseUrl + "delete/" + email
      console.log(url)
      return this.http.delete<User>(url);
    }




}