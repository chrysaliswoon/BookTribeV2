import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LoginComponent } from './auth/login/login/login.component';
import { LoginWelcomeComponent } from './auth/login/login-welcome/login-welcome.component';
import { DashboardOverviewComponent } from './dashboard/dashboard-overview/dashboard-overview.component';
import { InspirePageComponent } from './inspire/inspire-page/inspire-page.component';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { GoalsPageComponent } from './goals/goals-page/goals-page.component';
import { TribePageComponent } from './tribe/tribe-page/tribe-page.component';
import { ProfileComponent } from './profile/profile.component';
import { BillingComponent } from './billing/billing.component';
import { BookListComponent } from './books/book-list/book-list.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path: 'welcome', component: LoginWelcomeComponent,
  },
  {
    path: 'dashboard', component: AppLayoutComponent,
    children: [
      {path: '', component: DashboardOverviewComponent},
      {path: 'goals', component: GoalsPageComponent},
      {path: 'tribe', component: TribePageComponent},
      {path: 'inspire', component: InspirePageComponent},
      {path: 'about', component: AboutPageComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'billing', component: BillingComponent},
      {path: 'search', component: BookListComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
