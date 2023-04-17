import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {
  subscription: Subscription;

  darkMode: boolean = false;

  constructor(private route: ActivatedRoute, public router: Router, private layoutService: LayoutService) {
    this.subscription = this.layoutService.configUpdate$.subscribe(config => {
        this.darkMode = config.colorScheme === 'dark' || config.colorScheme === 'dim' ? true : false;
    });

  }

}
