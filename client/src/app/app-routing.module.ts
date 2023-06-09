import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { LoginComponent } from './auth/login/login/login.component';
import { LoginWelcomeComponent } from './auth/login/login-welcome/login-welcome.component';
import { DashboardOverviewComponent } from './dashboard/dashboard-overview/dashboard-overview.component';
import { InspirePageComponent } from './inspire/inspire-page/inspire-page.component';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { TribePageComponent } from './tribe/tribe-page/tribe-page.component';
import { ProfileComponent } from './profile/profile.component';
import { BillingComponent } from './billing/billing.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { WelcomeComponent } from './landing/welcome/welcome.component';
import { RegisterComponent } from './auth/registration/register/register.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { SuccessComponent } from './billing/success/success.component';
import { BookComponent } from './books/book/book.component';
import { MemberProfileComponent } from './tribe/member-profile/member-profile.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { BookReviewsComponent } from './books/book-reviews/book-reviews.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
    children: [
      {path: '', component: WelcomeComponent},
      {path: 'about', component: AboutPageComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'auth/verification', component: VerificationComponent },

  {
    path: 'welcome', component: LoginWelcomeComponent,
  },
  {
    path: 'dashboard', component: AppLayoutComponent,
    children: [
      {path: '', component: DashboardOverviewComponent},
      {path: 'reviews', component: ReviewsComponent},
      {path: 'tribe', component: TribePageComponent},
      {path: 'inspire', component: InspirePageComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'billing', component: BillingComponent},
      {path: 'search/:id', component: BookListComponent},
      {path: 'book/:id', component: BookComponent},
      {path: 'reviews/:id', component: BookReviewsComponent},
      {path: 'user/:id', component: MemberProfileComponent},
      {path: 'checkout', component: BillingComponent},
      { path: 'success', component: SuccessComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})] ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
