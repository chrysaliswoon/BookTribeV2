import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-profilemenu',
    templateUrl: './app.profilesidebar.component.html'
})
export class AppProfileSidebarComponent implements OnInit{
    username: any = '';
    email: any = '';

    constructor(public layoutService: LayoutService, public router: Router) { }


    get visible(): boolean {
        return this.layoutService.state.profileSidebarVisible;
    }

    set visible(_val: boolean) {
        this.layoutService.state.profileSidebarVisible = _val;
    }

    ngOnInit(): void {
        this.email = localStorage.getItem("email");
        this.username = localStorage.getItem("username");
    }

    profile() {
        this.router.navigate(["/dashboard/profile"]);

    }

    billing() {
        this.router.navigate(["/dashboard/billing"]);
    }

    signOut(){
        localStorage.removeItem("email")
        localStorage.removeItem("username")
        this.router.navigate(["/"]);
    }



    
}