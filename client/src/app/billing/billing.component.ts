import { Component } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
import { PaymentService } from '../services/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent {

  constructor(private paymentSvc:PaymentService , private router: Router){}


  pay() {
    this.paymentSvc.donatePayment();
  }

  
}
