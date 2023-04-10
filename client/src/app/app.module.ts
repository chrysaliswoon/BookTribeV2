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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginEmailComponent
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
