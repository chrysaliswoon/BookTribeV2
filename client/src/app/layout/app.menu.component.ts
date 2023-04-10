import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: '',
                icon: 'pi pi-home',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/dashboard']
                    },
                    {
                        label: 'Create Worksheet',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/dashboard/worksheet']
                    },
                    {
                        label: 'Classrooms',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/dashboard/classroom']
                    },
                ]
            },

        ];
    }
}
