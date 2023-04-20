import { Injectable } from "@angular/core";
import { environment } from "../environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { firstValueFrom } from "rxjs";


const BACKEND = environment.serverUrl

@Injectable({ providedIn: 'root' })


export class PaymentService {

    private baseUrl = BACKEND + "/api/payment"

    constructor(private http: HttpClient) {}

    donatePayment() {
        firstValueFrom(
            this.http.post<{redirectURL: string}>(this.baseUrl, "")).then(
                res => window.location.href = res.redirectURL
            )
    }


}
