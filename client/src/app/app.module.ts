import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { AppConfigModule } from './layout/config/app.config.module';
import { PrimeModule } from './layout/prime.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login/login.component';
import { LoginEmailComponent } from './auth/login/login-email/login-email.component';
import { LoginWelcomeComponent } from './auth/login/login-welcome/login-welcome.component';
import { DashboardOverviewComponent } from './dashboard/dashboard-overview/dashboard-overview.component';
import { InspireQuoteComponent } from './inspire/inspire-quote/inspire-quote.component';
import { InspirePoemComponent } from './inspire/inspire-poem/inspire-poem.component';
import { InspirePageComponent } from './inspire/inspire-page/inspire-page.component';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { GoalsPageComponent } from './goals/goals-page/goals-page.component';
import { GoalsCreateTaskComponent } from './goals/goals-create-task/goals-create-task.component';
import { GoalsTaskListComponent } from './goals/goals-task-list/goals-task-list.component';
import { TribePageComponent } from './tribe/tribe-page/tribe-page.component';
import { ProfileComponent } from './profile/profile.component';
import { BillingComponent } from './billing/billing.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { TopNavigationComponent } from './landing/top-navigation/top-navigation.component';
import { WelcomeComponent } from './landing/welcome/welcome.component';
import { HeroComponent } from './landing/hero/hero.component';
import { RegisterComponent } from './auth/registration/register/register.component';
import { RegisterEmailComponent } from './auth/registration/register-email/register-email.component';
import { VerificationComponent } from './auth/verification/verification.component';
import { BookshelfComponent } from './dashboard/bookshelf/bookshelf.component';
import { GoogleMapComponent } from './about/google-map/google-map.component';
import { SuccessComponent } from './billing/success/success.component';
import { BookComponent } from './books/book/book.component';
import { MemberProfileComponent } from './tribe/member-profile/member-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginEmailComponent,
    LoginWelcomeComponent,
    DashboardOverviewComponent,
    InspireQuoteComponent,
    InspirePoemComponent,
    InspirePageComponent,
    AboutPageComponent,
    GoalsPageComponent,
    GoalsCreateTaskComponent,
    GoalsTaskListComponent,
    TribePageComponent,
    ProfileComponent,
    BillingComponent,
    BookListComponent,
    LandingPageComponent,
    TopNavigationComponent,
    WelcomeComponent,
    HeroComponent,
    RegisterComponent,
    RegisterEmailComponent,
    VerificationComponent,
    BookshelfComponent,
    GoogleMapComponent,
    SuccessComponent,
    BookComponent,
    MemberProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,
    AppConfigModule,
    PrimeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
