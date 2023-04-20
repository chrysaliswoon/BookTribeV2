import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit{
  email: any = "";
  inbox: string = "https://mail.google.com/mail";

  constructor(private layoutService: LayoutService, private router: Router) {}

	get dark(): boolean {
		return this.layoutService.config.colorScheme !== 'light';
	}

  ngOnInit(): void {
      this.email = localStorage.getItem("email")
  }

  mailInbox() {
    window.location.href = this.inbox;
  }


}
