import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LoginComponent } from './auth/login/login/login.component';
import { LoginWelcomeComponent } from './auth/login/login-welcome/login-welcome.component';
import { DashboardOverviewComponent } from './dashboard/dashboard-overview/dashboard-overview.component';
import { InspirePageComponent } from './inspire/inspire-page/inspire-page.component';

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
      {path: 'inspire', component: InspirePageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
