import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit{
  email: any = "";

  constructor(private layoutService: LayoutService) {}

	get dark(): boolean {
		return this.layoutService.config.colorScheme !== 'light';
	}

  ngOnInit(): void {
      this.email = localStorage.getItem("email")
  }

}
