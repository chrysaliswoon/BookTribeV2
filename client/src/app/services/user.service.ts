import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { environment } from "../environment";
import { User } from "../models/user";


const BACKEND = environment.serverUrl

@Injectable({ providedIn: 'root' })

export class UserService {

    // API Url - POST to Users
    private authURL = BACKEND + "/api/auth/"

    // Inject the HttpClient
    constructor(private http: HttpClient) {}

    addUser(user: User): Promise<any> {

        const url = this.authURL + "signup"
    
    
        const qs = new HttpParams()
              .set("username", user.username)
              .set("firstName", user.firstName)
              .set("lastName", user.lastName)
              .set("email", user.email)
              .set("password", user.password)
    
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
    
          return lastValueFrom(
            this.http.post<any>(url, qs.toString(), { headers })
          )
          
    }

    authUser(user: User): Promise<any> {
        const url = this.authURL + "signin"
    
        const qs = new HttpParams()
          .set("email", user.email)
          .set("password", user.password)
    
          const headers = new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
    
          return lastValueFrom(
            this.http.post<any>(url, qs.toString(), { headers })
          )
      }

      getMembers() {
        const url = this.authURL + "users"

        return this.http.get<any>(url)
            .toPromise()
            .then(res => res.data as User[])
            .then(data => data);
    }


}