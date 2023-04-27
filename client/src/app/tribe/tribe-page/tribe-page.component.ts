import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-tribe-page',
    templateUrl: './tribe-page.component.html',
    styleUrls: ['./tribe-page.component.scss']
})
export class TribePageComponent implements OnInit {

    users!: User[];
    userSubscription: Subscription
    profileSubscription: Subscription
    user: User

    constructor(private router: Router, private userSvc: UserService) { }

    ngOnInit(): void {
        this.getUsers()
    }


    getUsers() {
        this.userSubscription = this.userSvc.getAllUsers().subscribe(data => {
            this.users = data
        })
    }

    viewProfile(id: string) {
        this.router.navigate(['dashboard/user', id]);
    }

}

// ngOnDestroy(): void {
//     this.userSubscription.unsubscribe()
//     this.profileSubscription.unsubscribe()
// }