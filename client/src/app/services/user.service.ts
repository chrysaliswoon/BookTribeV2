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

    // addUser(user: User): Promise<any> {

    //     const url = this.authURL + "signup"
    
    
    //     const qs = new HttpParams()
    //           .set("username", user.username)
    //           .set("firstName", user.firstName)
    //           .set("lastName", user.lastName)
    //           .set("email", user.email)
    //           .set("password", user.password)
    
    //     const headers = new HttpHeaders()
    //         .set('Content-Type', 'application/x-www-form-urlencoded')
    
    //       return lastValueFrom(
    //         this.http.post<any>(url, qs.toString(), { headers })
    //       )
          
    // }

    // authUser(user: User): Promise<any> {
    //   const url = this.authURL + "signin"

    //   const form = new FormData()
    //   form.set("email", user.email)
    //   form.set("password", user.password)

    //   return firstValueFrom(this.http.post<any>(url, form))
    // }

    // authUser(user: User): Promise<any> {
    //     const url = this.authURL + "signin"
    
    //     const qs = new HttpParams()
    //       .set("email", user.email)
    //       .set("password", user.password)
    
    //       const headers = new HttpHeaders()
    //       .set('Content-Type', 'application/x-www-form-urlencoded')

    //       console.log("Hello World")
    //       return firstValueFrom(
    //         this.http.post<any>(url, qs.toString(), { headers })
    //         )
    // }
    
    // getMembers(email: String) {
    //     const url = this.authURL + email

    //     return this.http.get<any>(url)
    //         .toPromise()
    //         .then(res => res.data as User[])
    //         .then(data => data);
    // }


}