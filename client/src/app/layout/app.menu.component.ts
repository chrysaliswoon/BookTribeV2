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
                        label: 'Home',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/dashboard']
                    },
                    {
                        label: 'Book Reviews',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/dashboard/reviews']
                    },
                    {
                        label: 'Book Tribe',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/dashboard/tribe']
                    },
                    {
                        label: 'Inspire',
                        icon: 'pi pi-fw pi-moon',
                        routerLink: ['/dashboard/inspire']
                    },
                    
                ]
            },

        ];
    }
}
