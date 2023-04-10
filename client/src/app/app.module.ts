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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginEmailComponent,
    LoginWelcomeComponent,
    DashboardOverviewComponent,
    InspireQuoteComponent,
    InspirePoemComponent,
    InspirePageComponent
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
